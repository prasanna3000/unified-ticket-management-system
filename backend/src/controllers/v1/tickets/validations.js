const {
    body,
    query,
} = require('express-validator');
const {
    ALLOWED_VALUES_FOR_PRIORITY,
    ALLOWED_VALUES_FOR_CATEGORY,
    ALLOWED_VALUES_FOR_SUBCATEGORY,
    ALLOWED_VALUES_FOR_VENDOR,
    ALLOWED_SOURCES,
    ALLOWED_STATUS_VALUES,
} = require('../../../config/database/values');

const validateSaveTicketRequest = [
    body('case_id')
        .trim()
        .notEmpty()
        .withMessage('case_id is required')
        .isAlphanumeric()
        .withMessage('case_id is invalid'),
    body('priority')
        .trim()
        .notEmpty()
        .withMessage('priority is required')
        .isInt()
        .withMessage('priority is invalid')
        .custom((priority) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_PRIORITY).includes(
                priority,
                )
            ) {
                throw new Error(`Invalid priority : ${priority} provided`);
            }
            return true;
        }),
    body('category')
        .trim()
        .notEmpty()
        .withMessage('category is required')
        .isString()
        .withMessage('category is invalid')
        .custom((category) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_CATEGORY).includes(
                category,
                )
            ) {
                throw new Error(`Invalid category : ${category} provided`);
            }
            return true;
        }),
    body('sub_category')
        .trim()
        .isString()
        .withMessage('sub_category is invalid')
        .custom((sub_category) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_SUBCATEGORY).includes(
                sub_category,
                )
            ) {
                throw new Error(`Invalid sub_category : ${sub_category} provided`);
            }
            return true;
        }),
    body('source')
        .trim()
        .notEmpty()
        .withMessage('source is required')
        .isString()
        .withMessage('source is invalid')
        .custom((source) => {
            if (
                !Object.values(ALLOWED_SOURCES).includes(
                source,
                )
            ) {
                throw new Error(`Invalid source : ${source} provided`);
            }
            return true;
        }),
    body('source_meta')
        .custom((source_meta) => {
            if (Object.keys(source_meta).length === 0) {
                throw new Error(`Invalid source_meta : ${Object.keys(source_meta).length} provided`);
            }
            return true;
        }),
    body('provider')
        .trim()
        .notEmpty()
        .withMessage('provider is required')
        .isString()
        .withMessage('provider is invalid')
        .custom((provider) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_VENDOR).includes(
                provider,
                )
            ) {
                throw new Error(`Invalid provider : ${provider} provided`);
            }
            return true;
        }),
    body('provider_meta')
        .trim()
        .notEmpty()
        .withMessage('provider_meta is required')
        .isString()
        .withMessage('provider_meta is invalid')
        .custom((provider_meta) => {
            if (provider_meta && Object.keys(provider_meta).length === 0) {
                throw new Error(`Invalid provider_meta : ${provider_meta} provided`);
            }
            return true;
        }),
    body('author')
        .trim()
        .notEmpty()
        .withMessage('author is required')
        .isString()
        .withMessage('author is invalid')
        .custom((author) => {
            if (author && Object.keys(author).length === 0) {
                throw new Error(`Invalid author : ${author} provided`);
            }
            return true;
        }),
    body('acl')
        .notEmpty()
        .withMessage('acl is required')
        .isArray()
        .withMessage('acl is invalid')
        .custom((acl) => {
            if (acl && acl.length === 0) {
                throw new Error(`Invalid acl : ${acl} provided`);
            }
            return true;
        }),
];

const validateGetTickets = [
    query('pageOffset')
        .notEmpty()
        .withMessage('pageOffset is required')
        .isInt()
        .withMessage('pageOffset is invalid'),
    query('pageLimit')
        .notEmpty()
        .withMessage('pageLimit is required')
        .isInt()
        .withMessage('pageLimit is invalid'),
];

const validateUpdateTicketRequest = [
    body('case_id')
        .trim()
        .optional({nullable: true})
        .isAlphanumeric()
        .withMessage('case_id is invalid'),
    body('priority')
        .trim()
        .isInt()
        .withMessage('priority is invalid')
        .custom((priority) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_PRIORITY).includes(
                priority,
                )
            ) {
                throw new Error(`Invalid priority : ${priority} provided`);
            }
            return true;
        }),
    body('category')
        .trim()
        .optional({nullable: true})
        .isString()
        .withMessage('category is invalid')
        .custom((category) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_CATEGORY).includes(
                category,
                )
            ) {
                throw new Error(`Invalid category : ${category} provided`);
            }
            return true;
        }),
    body('sub_category')
        .trim()
        .optional({nullable: true})
        .isString()
        .withMessage('sub_category is invalid')
        .custom((sub_category) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_SUBCATEGORY).includes(
                sub_category,
                )
            ) {
                throw new Error(`Invalid sub_category : ${sub_category} provided`);
            }
            return true;
        }),
    body('source')
        .trim()
        .optional({nullable: true})
        .isString()
        .withMessage('source is invalid')
        .custom((source) => {
            if (
                !Object.values(ALLOWED_SOURCES).includes(
                source,
                )
            ) {
                throw new Error(`Invalid source : ${source} provided`);
            }
            return true;
        }),
    body('source_meta')
        .optional({nullable: true})
        .custom((source_meta) => {
            if (Object.keys(source_meta).length === 0) {
                throw new Error(`Invalid source_meta : ${Object.keys(source_meta).length} provided`);
            }
            return true;
        }),
    body('provider')
        .trim()
        .optional({nullable: true})
        .isString()
        .withMessage('provider is invalid')
        .custom((provider) => {
            if (
                !Object.values(ALLOWED_VALUES_FOR_VENDOR).includes(
                provider,
                )
            ) {
                throw new Error(`Invalid provider : ${provider} provided`);
            }
            return true;
        }),
    body('provider_meta')
        .trim()
        .optional({nullable: true})
        .isString()
        .withMessage('provider_meta is invalid')
        .custom((provider_meta) => {
            if (provider_meta && Object.keys(provider_meta).length === 0) {
                throw new Error(`Invalid provider_meta : ${provider_meta} provided`);
            }
            return true;
        }),
    body('author')
        .trim()
        .optional({nullable: true})
        .isString()
        .withMessage('author is invalid')
        .custom((author) => {
            if (author && Object.keys(author).length === 0) {
                throw new Error(`Invalid author : ${author} provided`);
            }
            return true;
        }),
    body('acl')
        .isArray()
        .optional({nullable: true})
        .withMessage('acl is invalid')
        .custom((acl) => {
            if (acl && acl.length === 0) {
                throw new Error(`Invalid acl : ${acl} provided`);
            }
            return true;
        }),
];

module.exports = {
    validateSaveTicketRequest,
    validateGetTickets,
    validateUpdateTicketRequest,
}
