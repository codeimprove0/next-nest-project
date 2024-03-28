export const API_URL = {
    GETWAY_API: process.env.REACT_APP_GETWAY_API + 'insurancebox/',
    GETWAY_DOCS_API: process.env.REACT_APP_GETWAY_API + 'insurancebox-docs/',
};

export const APIV = 1;
export const apikey = '';//`insurancebox-ac1faa7b-9fe9-4483-9525-5cc4ce94c639`;
export const CURRENCY_SYMBOL = '₱';
export const INSURANCE_LIST_SORT = [
    { label: 'Insurance ID DESC', value: 'id__desc' },
    { label: 'Insurance ID ASC', value: 'id__asc' },
    { label: 'Created Date ASC', value: 'created_at__asc' },
    { label: 'Created Date DESC', value: 'created_at__desc' },
    { label: 'Modified Date ASC', value: 'updated_at__asc' },
    { label: 'Modified Date DESC', value: 'updated_at__desc' }
];

export const WHATSAPP_WEB_URL = "https://web.whatsapp.com/send?text=";

export const APP_TYPE_WITH_UCF = 1;
export const APP_TYPE_STANDALONE = 2;

export const DOCUMENT_CATEGORY = {
    "firstSubmit": { doc_type_id: 1, childs: { "orcr": 1, "sales_deed": 2, "existing_policy": 3, "vehicle_photos": 4, "govt_id": { value: 32, slug: 'govt_id', child: {} }, "credit_advice_doc": { value: 59, slug: 'credit_advice', child: {} } } },
    "disbursal": { doc_type_id: 2, childs: { "soft_approval": 10, "policy_shared": 11 } },
    "postDisbursal": { doc_type_id: 3, childs: { "proof_inbound": 12, "proof_outbound": 13, "proof_customer_partner_broker": 14 } },
}

export const STATUS_SUB_STATUS = {
    "status": {
        "application": 1,
        "sent_to_insurance_broker": 2,
        "insurance_policy": 3,
        "insurance_payment": 4,
        "incentive_payment": 5,
        "lost": 6
    },
    "subStatus": {
        "customer_details_filled": 1,
        "application_created": 2,
        "approval_in_progress": 3,
        "sent_to_insurance_broker": 4,
        "soft_approval_received": 5,
        "policy_generated": 6,
        "policy_shared": 7,
        "payment_from_customer": 8,
        "payment_from_sales_team": 9,
        "payment_from_broker": 10,
        "payment_to_insurance_broker": 11,
        "payment_to_sales_team": 12,
        "reject_incorrect_data": 13,
        "reject_junk_application": 14,
        "cancel_by_carmudi": 15,
        "cancel_by_customer": 16,
        "cancel_by_insurance_partner": 17,
        "other": 18,
        "soft_approval_rejected": 19,
        "insurance_policy_cancelled": 20,
        "payment_from_customer_to_partner_broker": 21
    }
}

export const INBOUND_PAYMENT_FROM_CUSTOMER = 3;
export const INBOUND_PAYMENT_FROM_SALES_TEAM = 2;
export const INBOUND_PAYMENT_FROM_BROKER = 1;


export const OUTBOUND_PAYMENT_TO_SALES_TEAM = 2;
export const OUTBOUND_PAYMENT_TO_BROKER = 1;

export const WITH_UCF_PAYMENT_OPTION = [
    { value: 'customer', label: "Carmudi" },
    { value: 'sales_team', label: "Sales Team" },
    { value: 'broker', label: "Insurance Partner/Broker" }
];

export const STANDALONE_PAYMENT_OPTION = [
    { value: 'customer', label: "Carmudi" },
    { value: 'broker', label: "Insurance Partner/Broker" }
];

export const PAYMENT_TYPE_INBOUND = 1;
export const PAYMENT_TYPE_OUTBOUND = 2;
export const PAYMENT_TYPE_FROM_CUSTOMER_TO_BROKER = 3;

export const SOFT_APPROVAL_RECEIVED_TYPE = 1;
export const POLICY_GENERATED_TYPE = 2;

export const MAX_FILE_UPLOAD = 5;

export const SHARE_METHOD = { "email": 1, "whatsapp": 2, "viber": 3 };

export const ROLE_FEATURES = {
    "customer_details": 1,
    "personal_details": 2,
    "residential_details": 3,
    "vehicle_details": 4,
    "send_to_insurance_broker": 5,
    "soft_approval_received": 6,
    "insurance_policy_generated": 7,
    "insurance_policy_shared": 8,
    "inbound_payment": 9,
    "payment_from_customer": 10,
    "payment_from_sales_team": 11,
    "payment_from_insurance_broker": 12,
    "outbound_payment": 13,
    "payment_to_insurance_broker": 14,
    "payment_to_sales_team": 15,
    "lost": 16,
    're-open': 17,
    "insurance_partner_management": 18,
    "task_role_assignment": 19,
    "loan_expected": 20,
    "doc_upload": 21,
    "listing_page": 22,
    "dashboard_page": 23,
    "sent_to_insurance_broker": 24,
    "sent_to_insurance_broker_email": 25,
    "sent_to_insurance_broker_whats_app": 26,
    "sent_to_insurance_broker_viber_template_config": 27,
    "insurance_policy": 28,
    "insurance_policy_shared_email": 29,
    "insurance_policy_shared_whats_app": 30,
    "insurance_policy_shared_viber_template_config": 31,
    "import_module": 32,
    "update_module": 33,
    "assign_lead_to_user": 34,
    "my_cases": 35,
    "other_details": 36,
    "payment_from_customer_to_partner_broker": 37
}

// export const LEAD_TYPE_COMPREHENSIVE = 1;
// export const LEAD_TYPE_CTPL = 2;

export const FIELD_TYPE = {
    TEXT_BOX: 'tb',
    DROP_DOWN: 'dd',
    DROPDOWN_INPUT_FIELD: 'ddtb',
    SEARCHABLE_DROP_DOWN: 'sdd',
    READ_ONLY_TEXT_BOX: 'ro',
    DATE_PICKER: 'date',
    MOBILE_FIELD: 'mobile',
    STICKY_FIELD: "sticky",
    EMAIL: 'email',
    MARKET_MRP: 'market_mrp',
    CITY: 'city',
    STATE: 'state',
    LOCALITY: 'locality',
    RADIO_BOX: 'radio',
    MRP_UPPING: 'mrp_upping',
    CURRENCY: 'currency',
    FUTURE_DATE: 'future_date',
    TELEPHONE: 'telephone',
    CHECK_BOX: 'checkbox',
    SELECT_ADDON: 'select_addon',
    SUM: 'sum',
    TEXT_AREA: 'ta',
    MULTI_DROP_DOWN :'mdd'
}

export const ADD_ONS_TYPE = {
    BODILY_INJURY: 'bi',
    PROPERTY_DAMAGE: 'pd',
    PERSONAL_ACCIDENE: 'pa',
    RIOTS_STRIKES_CIVIL: 'rsc',
    TOWING_ROWDSIDE: 'tra',
    ACTS_OF_NATURE: 'an'
} 

export const INS_TYPE_COMPREHENSIVE = 1;
export const INS_TYPE_CTPL = 2;

export const LEAD_TYPE_SFA_APP = 1
export const LEAD_TYPE_DEALER_APP = 2
export const LEAD_TYPE_WEB_APP = 3

export const WITH_RULE_ENGINE = 1
export const WITHOUT_RULE_ENGINE = 2


export const WITH_RULE_ENGINE_ID = 1;

export const LOST_REASON_FLAGS =  ['rej_incorrect_data', 'rej_junk_app', 'carmudi', 'customer', 'ins_partner', 'add_remark'];

export const ROLE = {5:'sm_id',6:'so_id',7:'aro_id',8:'agent_id'}; 

export const LOST_REASON_IDS =  [13, 14, 15, 16, 17, 18];

export const DOC_STATUS = {0: 'Pending', 1: 'Requested', 2: 'Submitted', 3: 'Approved'} 
export const AGENT_ROLE_ID = 8;
export const ARO_ROLE_ID = 7;

export const PHILIPPINE_CURRENCY =   `&#8369;`;

export const REGEX_EMAIL_VALIDATION = /^[^@]+@[^@]+\.[^@.]{2,5}$/;

export const DOCUMENTS_CATEGORY_INBOUND = {
    '1_installment_file': 15,
    '2_installment_file': 16,
    '3_installment_file': 17,
    '4_installment_file': 18,
    '5_installment_file': 19,
    '6_installment_file': 20,
    '7_installment_file': 21,
    '8_installment_file': 22,
    '9_installment_file': 23,
    '10_installment_file': 24,
    '11_installment_file': 25,
    '12_installment_file': 26
};

export const PAYMENT_TERM_INSTALLMENT = 2;

export const DOCUMENT_CATEGORY_OTHER_DOCUMENT = 27;

export const EFFECTIVITY_EXPIRY_INTERVAL = 60;

export const REGEX_DECIMAL_VALIDATION = /^[0-9]*(\.[0-9]{0,2})?$/;
