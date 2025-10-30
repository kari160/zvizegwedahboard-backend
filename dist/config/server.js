"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', 'localhost'),
    port: env.int('PORT', 4000),
    app: {
        keys: env.array('APP_KEYS'),
    },
});
