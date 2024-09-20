import ifscFormat from "./indiaIFSC";
import indiaPANFormat from "./indiaPAN";
import pincodeFormat from "./indiaPincode";
import FormatI from "./interfaces/FormatI.interface";
import iso8601DurationFormat from "./iso8601Duration";
import positiveNumberInStringFormat from "./positiveNumberInString";
import udyamFormat from "./udyam";
import UTCTimeFormat from "./UTCTime";
import uuidFormat from "./uuid";

const ajvCustomFormats: FormatI[] = [
    {
      name: 'uuid',
      format: uuidFormat,
    },
    {
      name: 'india-PAN',
      format: indiaPANFormat,
    },
    {
      name: 'udyam',
      format: udyamFormat,
    },
    {
      name: 'india-pincode',
      format: pincodeFormat,
    },
    {
      name: 'india-IFSC',
      format: ifscFormat,
    },
    {
      name: 'positive-number-in-string',
      format: positiveNumberInStringFormat,
    },
    {
      name: 'utc-date-time',
      format: UTCTimeFormat,
    },
    {
      name: 'iso8601-date-time',
      format: iso8601DurationFormat,
    },
  ];
  export default ajvCustomFormats