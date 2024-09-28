const getTOTP = require("totp-mfa").getTOTP;

module.exports.templateTags = [
    {
        name: "mfaTOTP",
        "displayName": "MFA TOTP",
        "description": "Generate a Time-Based One-Time Password",
        args: [
            {
                displayName: "secret",
                description: "MFA Secret",
                type: "string",
                defaultValue: "MFA_SECRET"
            },
        ],
        async run(_context, mfaSecret) {
            return getTOTP(mfaSecret);
        }
    }
];