const path   = require('path');
export const GENERAL_CONST = () => ({
    GENDER: [
        { id: 'male', label: "Male" },
        { id: "female", label: "Female" }
    ],

    MARITAL_STATUS: [
        { label: "Single", id: "single" },
        { label: "Married", id: "married" },
        { label: "Live In Partner", id: "live_in_partner" },
        { label: "Separated", id: "separated" },
        { label: "Divorced", id: "annulled_divorced" },
        { label: "Widower", id: "widower" },
    ],

    DURATION_OF_STAY: [
        { label: "1", id: "1" },
        { label: "2", id: "2" },
        { label: "3", id: "3" },
        { label: "4", id: "4" },
        { label: "5", id: "5" },
        { label: ">5", id: ">5" }
    ],

    QUALIFICATION: [
        {label: "Primary", id: "primary" },
        {label: "Secondary - High School Passing", id: "secondary" },
        {label: "Graduate", id: "graduate" },
        {label: "Post Graduate", id: "pg" }
    ],

    EMPLOYMENT_TYPE: [
        {label: "Salaried Employee", id: "1" },
        {label: "Business Employee", id: "2" },
        {label: "Overseas Employee - Seaman", id: "3" },
        {label: "Overseas Employee - Working on Land", id: "4" },
        {label: "Allottee", id: "5" }
    ],

    PER_PAGE: 10,
    NATIONALITY: [
        { label: "India", id: "in" },
        { label: "Others", id: "other" }
    ],
    HOUSETYPE: [
        {label: "Owned", id: "owned" },
        {label: "Rented", id: "rented" }
    ],
    FULFILLMENT_TYPE: [
        {label: "Self", id: "self" },
        {label: "Ambak", id: "ambak" }
    ],
    SFA_ROLE_ID: {
        1: 'nh_id',
        2: 'zh_id',
        3: 'rm_id'
    },
    TENURE: manageTenure(40),
    FOLLOWUP_WITH: [
        {label: "Customer", id: "customer" },
        {label: "Bank Spoc", id: "bank_spoc" },
        {label: "Lawyer", id: "lawyer" },
        {label: "Property Evaluator", id: "property_evaluator" },
    ],
    DOC_STATUS: [
        {label: "Pending", id: "0" },
        {label: "Uploaded", id: "1" },
        {label: "Verified", id: "2" },
    ],
    CA_TYPE:[
        {"id":"non_financial", "label":"Non-Financing"},
        {"id":"financial", "label":"Financing"}
    ],
    LEAD_STATUS:[
        {"id":2, "value":"logged_in","label":"Login"},
        {"id":3, "value":"approval","label":"Sanction"},
        {"id":4, "value":"disbursal","label":"Disbursal"}
    ]
});


// manageTenure
const manageTenure = (upto)=>{
	let tenure = [];
    for (let i = 5; i <= upto; i++) {
        tenure.push({id: i, value: i, label: i.toString()});
    }
	return tenure;
}
 

export const AES_CIPHER_ALGO = 'aes-128-ecb';
export const AES_KEY = 'A625GSKA9281CJ72';

export const BASE_DIR     = path.join(__dirname, '../../../../');

export const CUSTOMER_DATA_FIELD = [
    {key:"first_name", string : true },{key:"last_name", string : true },{key:"dob",string:true},{key:"marital_status",string:true},{key:"email",string:true},{key:"mobile",string:true},{key:"alt_phone",string:true},{key:"qualification",string:true},{key:"gender",string:true},{key:"pancard_no",string:false},{key:"pa_house_number",string:true},{key:"pa_street",string:true},{key:"pa_status",string:true},{key:"pa_city",string:true},{key:"pa_pincode",string:true},{key:"cra_house_number",string:true},{key:"cra_street",string:true},{key:"cra_status",string:true},{key:"cra_city",string:true},{key:"cra_pincode",string:true},{key:"gross_monthly_income",string:true}
];

export const AB_RM_ROLE_ID = 3; 


export const LOGIN_CAPTCHA_HASH = '495c797526a4-b34b-462d-3cab-e8fe3567';    