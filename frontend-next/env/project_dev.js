// Dev is unused
// module.exports = global.Project = {
//     api: 'https://api-dev.flagsmith.com/api/v1/',
//     flagsmithClientAPI: 'https://api.flagsmith.com/api/v1/',
//     flagsmith: '8KzETdDeMY7xkqkSkY3Gsg', // This is our Bullet Train API key - Bullet Train runs on Bullet Train!
//     debug: false,
//     env: 'dev', // This is used for Sentry tracking
//     maintenance: false, // trigger maintenance mode
//     demoAccount: {
//         email: 'kyle+bullet-train@solidstategroup.com',
//         password: 'demo_account',
//     },
//     chargebee: {
//         site: 'flagsmith-test',
//     },
// };

export const Project = {
    ga:"",
    heap:"",
    mixpanel:"",
    logs: {
        EVENTS: true,
        DATA: false,
        STORE: false,
        DISPATCHER: false,
        COGNITO: false,
        STORAGE: false,
        SERVER: false,
        API: false,
        PUSH_NOTIFICATIONS: false,
    },
    api: 'https://api-staging.flagsmith.com/api/v1/',
    flagsmithClientAPI: 'https://api.flagsmith.com/api/v1/',
    flagsmith: 'ENktaJnfLVbLifybz34JmX', // This is our Bullet Train API key - Bullet Train runs on Bullet Train!
    env: 'staging', // This is used for Sentry tracking
    maintenance: false, // trigger maintenance mode
    demoAccount: {
        email: 'kyle+bullet-train@solidstategroup.com',
        password: 'demo_account',
    },
    chargebee: {
        site: 'flagsmith-test',
    },
};
