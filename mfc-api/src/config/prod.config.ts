
const ENV    = process.env;
const env_js = ENV.NODE_ENV ? require(`./${ENV.NODE_ENV}.config`).config() : {};

let def_val = {

    SERVER_PORT: ENV.SERVER_PORT || '6001',

    DB_HOST      : ENV.DB_HOST || '10.30.10.33',
    DB_NAME      : ENV.DB_NAME || 'carbay_id_sfa',
    DB_USER      : ENV.DB_USER || 'girnar',
    DB_PASS      : ENV.DB_PASS || 'A]P%?>5T=VC,5F96!A',
    DB_PORT      : ENV.DB_PORT || '3306',
    DB_CONN_TYPE : ENV.DB_CONN_TYPE || 'mysql',
    DB_CONN_QUERY: ENV.DB_CONN_QUERY || '100',
    DB_TIMEZONE  : ENV.DB_TIMEZONE || '+05:30',
    MONGODB_URL  : ENV.MONGODB_URL || "mongodb://localhost:27017/carbay_id_sfa_incentivebox",
    
    PER_PAGE: +ENV.PAGE_LIMIT || 10,
    QUERY_LOG: +ENV.QUERY_LOG || true,
    CRYPTO_KEY: ENV.CRYPTO_KEY || "U*oDwrIU!B#QX37%#24",
    SUPPORT_EMAIL_ID: ENV.SUPPORT_EMAIL_ID || 'support@admin.com',
    
    //JWT AUTH
    JWT_SECRET        : ENV.JWT_SECRET || 'intphbeta2023june',
    JWT_TOKEN_LIFE    : +ENV.JWT_TOKEN_LIFE || 86400,
    JWT_REFRESH_SECRET: ENV.JWT_REFRESH_SECRET || 'intphbeta2023june',
    REFRESH_TOKEN_LIFE: +ENV.REFRESH_TOKEN_LIFE || 86400,                   // 1day
    OTP_EXPIRY_MINUTE : +ENV.OTP_EXPIRY_MINUTE || '10',

    DEFAULT_MAILS:['admin@gmail.com'],
    RESPONSE_TIMEOUT: +ENV.RESPONSE_TIMEOUT || 5000,
    BUCKETNAME: ENV.BUCKETNAME || "loan-stage",
    DATE_FORMAT : "YYYY-MM-DD",
    LB_APIKEY : ENV.PHLB_APIKEY || "87868-NPHTM-C97JMPH-9MPGT-3V66TPH-PB143",
    PB_APIKEY : ENV.PHPB_APIKEY || "PHPBH-63372-C97JM-9MPGT-3V66T-PBH18",
    IS_REDIS_CACHE: ENV.IS_REDIS_CACHE || false,
    REDIS_STORE   : +ENV.REDIS_STORE || 0,
    REDIS_HOST    : ENV.REDIS_HOST || 'localhost',
    REDIS_PORT    : +ENV.REDIS_PORT || 5308,
    REDIS_TTL     : +ENV.REDIS_TTL || 60 * 60 * 24 * 30,
    CAPTCHA_TTL   : 300,
    DOC_PATH_NO_IMAGE: ENV.DOC_PATH_NO_IMAGE || "https://carbay-finance-ph-pub.storage.googleapis.com/finance/noimg/1691651976951.png"
}



export const GENERAL_CONFIG = () => Object.keys(env_js).length ? env_js : def_val
