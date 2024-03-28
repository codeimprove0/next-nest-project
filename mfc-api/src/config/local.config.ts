export const config = () => ({
    SERVER_PORT: 6001,

    //DB CONFIG
    DB_HOST      : "10.30.10.33",
    DB_NAME      : "carbay_id_sfa",
    DB_USER      : "girnar",
    DB_PASS      : "A]P%?>5T=VC,5F96!A",
    DB_PORT      : "3306",
    DB_CONN_TYPE : "mysql",
    DB_CONN_QUERY: "100",
    DB_TIMEZONE  : "+05:30",
    MONGODB_URL  : "mongodb://localhost:27017/carbay_id_sfa_incentivebox",

    QUERY_LOG: true,
    PAGE_LIMIT: 6,
    CRYPTO_KEY: "U*oDwrIU!B#QX37%#24",
    SUPPORT_EMAIL_ID: "support@admin.com",

    //JWT AUTH
    JWT_SECRET: "oto_20230923",
    JWT_TOKEN_LIFE: 86400, // 1min
    JWT_REFRESH_SECRET: "oto_20230923",
    REFRESH_TOKEN_LIFE: 86400, // 1day
    OTP_EXPIRY_MINUTE: "10",

    RESPONSE_TIMEOUT: 5000,
    BUCKETNAME: "otobackendbeta",

    DATE_FORMAT : "YYYY-MM-DD",
    LB_APIKEY :"d77bc90f-2311-47da-9980-2930de73-ambak-finex-beta",
    PB_APIKEY :"d77bc90f-3350-47da-94c2-2930de73-ph-pb-beta",
    IS_REDIS_CACHE: false,
    REDIS_STORE: 0,
    REDIS_HOST: 'localhost',
    REDIS_PORT: 5308,
    REDIS_TTL: 60 * 60 * 24 * 30,
    CAPTCHA_TTL   : 300,
    DOC_PATH_NO_IMAGE: "https://otobackendbeta.storage.googleapis.com/PH/finance/noimg/1691581047952.svg"
})
