# smh-ajv-utils

smh-ajv-utils is an advanced utility package designed to extend AJV (Another JSON Schema Validator) with custom formats and keywords, allowing developers to create more precise and tailored JSON schema validations. This package simplifies the process of defining complex validation rules, making it easier to handle specific application logic directly within your JSON schema

## Installation
```sh
# NPM
npm install --save smh-ajv-utils ajv ajv-formats ajv-errors

#Yarn
yarn add smh-ajv-utils ajv ajv-formats ajv-errors
```
## Usage

```js
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'smh-ajv-utils'

ajvErrors(ajv);
ajvFormats(ajv);

ajvCustomFormatsRegistry(ajv);
ajvCustomKeywordsRegistry(ajv);

```
## Keywords

### decimalPrecision
This Keyword works for both string and number values, enforcing strict control over decimal places


#### Usage

```schema
# schema

{
    price:{
        type:'number',
        decimalPrecision:2
    }
}

# Example

price:2 // valid
price:2.11 // valid
price:2.123 // not valid

# schema

{
    price:{
        type:'string',
        decimalPrecision:2
    }
}

# Example

price:'2' // valid
price:'2.11' // valid
price:'2.123' // not valid
price:'2.123a' // not valid
```

## Formats

### uuid
This format will help validate whether a given string is a valid UUID (Universally Unique Identifier).


#### Usage

```schema
# schema

{
    id:{
        type:'string',
        format:'uuid'
    }
}

# Example

id:'e3ced088-62a2-418b-bda1-d114a37badb3' // valid
id:'e3ced088-62a2-418b-bda1-d114a' // not valid

```

### udyam
This format should be used for fields where a valid Udyam registration id.


#### Usage

```schema
# schema

{
    udyam:{
        type:'string',
        format:'udyam'
    }
}

# Example

udyam:'Udyam-12-34-1234567' // valid
udyam:'e3ced088-62a2-418b-bda1-d114a' // not valid

```

### positive-number-in-string
This format should be used for fields where a positive number is expected but represented as a string


#### Usage

```schema
# schema

{
    price:{
        type:'string',
        format:'positive-number-in-string'
    }
}

# Example

price:'123' // valid
price:'-123' // not valid

```

### utc-date-time
This format should be used for fields where a valid UTC date and time is required, such as timestamps or logging events


#### Usage

```schema
# schema

{
    timestamp:{
        type:'string',
        format:'utc-date-time'
    }
}

# Example

timestamp:'2024-09-21T14:30:00Z' // valid
timestamp:'12/09/2023' // not valid

```

### iso8601-date-time
This format should be used to ensure the string adheres to the ISO 8601 date-time format


#### Usage

```schema
# schema

{
    timestamp:{
        type:'string',
        format:'iso8601-date-time'
    }
}

# Example

timestamp:'PT13D' // valid
timestamp:'PT12H' // not valid

```

### india-PAN
This format is used to validate fields where a valid Indian PAN number.


#### Usage

```schema
# schema

{
    pan:{
        type:'string',
        format:'india-PAN'
    }
}

# Example

pan:'HNEPS8362B' // valid
pan:'PT12H' // not valid

```

### india-pincode
This format should be used for fields where a valid Indian PIN code.


#### Usage

```schema
# schema

{
    pincode:{
        type:'string',
        format:'india-pincode'
    }
}

# Example

pincode:'516501' // valid
pincode:'PT12H' // not valid

```

### india-IFSC
This format should be used for fields where a valid Indian IFSC code.


#### Usage

```schema
# schema

{
    ifsc:{
        type:'string',
        format:'india-IFSC'
    }
}

# Example

ifsc:'SBIN0001234' // valid
ifsc:'PT12H' // not valid

```

And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[MIT with Partial Redistribution License](./LICENSE)

---

Made with ❤️
