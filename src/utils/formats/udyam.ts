import { FormatDefinition } from "ajv";

const udyamFormat: FormatDefinition<string> = {
    type: 'string',
    validate: (data: string) => /^UDYAM-[A-Z]{2}-00-\d{7}$/.test(data),
  };
  export default udyamFormat