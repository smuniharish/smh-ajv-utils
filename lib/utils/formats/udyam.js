"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const udyamFormat = {
    type: 'string',
    validate: (data) => /^UDYAM-[A-Z]{2}-00-\d{7}$/.test(data),
};
exports.default = udyamFormat;
