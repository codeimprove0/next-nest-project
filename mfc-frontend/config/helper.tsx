import CryptoJS from "crypto-js";
import secureStorage from './encrypt';
import { CURRENCY_SYMBOL, STATUS_SUB_STATUS } from './constant';
var SECRET_KEY = "girnarsoftInternationalInsurance";

export const encrypt = (data:any) => {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);
    data = data.toString();
    return data;
}

export const isUserHasAccessPage = (params: {permissionID: string|number, accessType: any, assignUserId?: string|null|undefined }) => {
    let { permissionID, accessType, assignUserId } = params;

    let isAuthorized = false;
    let authUserInfo = secureStorage.getItem('authUserInfo');
    let userDetails = authUserInfo && authUserInfo.user_data;

    if (permissionID) {
        const accessParams = (userDetails && userDetails.feature_access) ? userDetails.feature_access.filter((feature:any)=> +feature.assigned_feature_ids ===  +permissionID): [];
        // if(permissionID == 35) console.log("accessParamsaccessParams", accessType,accessParams, permissionID, ''+assignUserId, ''+userDetails.id, highestRoleid);

        if (accessParams && accessParams[0]) {

            // let checkEditAccess = accessParams.filter((feature: any)=> ([1,2].includes(+highestRoleid) && feature.canEdit) || (assignUserId && [3].includes(+feature.assign_role_id) && ''+assignUserId === ''+userDetails.id) || (![1,2,3].includes(+highestRoleid) && feature.canEdit))
            // let checkViewAccess = accessParams.filter((feature: any)=> ([1,2].includes(+highestRoleid) && feature.canView) || (assignUserId && [3].includes(+feature.assign_role_id) && ''+assignUserId === ''+userDetails.id) || (![1,2,3].includes(+highestRoleid) && feature.canEdit))
            // if(permissionID == 17) console.log(checkEditAccess)

            // let checkEditAccess = accessParams.filter((feature: any)=> (([1,2].includes(+highestRoleid) && [1,2].includes(+feature.assign_role_id) && feature.canEdit) || (''+assignUserId && [3].includes(+feature.assign_role_id) && ''+assignUserId === ''+userDetails.id && feature.canEdit) || (![1,2,3].includes(+highestRoleid) && feature.canEdit)))
            // let checkViewAccess = accessParams.filter((feature: any)=> ([1,2].includes(+highestRoleid) && [1,2].includes(+feature.assign_role_id) && feature.canView) || (''+assignUserId && [3].includes(+feature.assign_role_id) && ''+assignUserId === ''+userDetails.id && feature.canView) || (![1,2,3].includes(+highestRoleid) && feature.canView))

            let checkEditAccess = accessParams.filter((feature: any)=> ([1,2].includes(+feature.assigned_role_id) && feature.canEdit) || (assignUserId && [3].includes(+feature.assigned_role_id) && ''+assignUserId === ''+userDetails.id && feature.canEdit) || (![1,2,3].includes(+feature.assigned_role_id) && feature.canEdit))
            let checkViewAccess = accessParams.filter((feature: any)=> ([1,2].includes(+feature.assigned_role_id) && feature.canView) || (assignUserId && [3].includes(+feature.assigned_role_id) && ''+assignUserId === ''+userDetails.id && feature.canView) || (![1,2,3].includes(+feature.assigned_role_id) && feature.canView))

            // if(permissionID == 35) console.log("accessParamsaccessParams", checkEditAccess);
            
            // if(accessType === 'edit' && accessParams[0]['canEdit']){
            if(accessType === 'edit' && checkEditAccess.length){
                isAuthorized = true;

                // if(assignUserId !== undefined && ''+assignUserId !== ''+userDetails.id && ![1,2].includes(+highestRoleid)) {
                //     isAuthorized = false;
                // }
            }
            else if(accessType === 'view' && checkViewAccess.length && userDetails.assigned_role_ids.indexOf("3")>=0){
            // else if(accessType === 'view' && accessParams[0]['canView'] && userDetails.assigned_role_ids.indexOf("3")>=0){
                if(+accessParams[0].assigned_feature_ids === 35) isAuthorized = true
                isAuthorized = true;
            }
            else if(accessType === 'isVisible' ){
                // else if(accessType === 'isVisible' && (checkEditAccess.length || checkViewAccess.length)){
                isAuthorized = true;
            }
        }
    }

    return isAuthorized;
}

//function to convert file into base 64 for previewing image
export const toBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

/**
 * function to detect media type of base 64 buffer/array
 * @param {Array} b64 
 * @returns {String} match media type
 */
export const detectMimeType = (b64: any, others?: {allowedExtensions: Array<any>}) => {
    return new Promise((resolve, reject) => {
        if (!b64) resolve(false)

        let fileType = b64.split(';')[0]
        b64 = b64.split(',')[1]

        const signatures:any= {
            iVBORw0KGgo: "image/png",
            "/9j/": "image/jpg",
            ffd8ffe0: "image/jpeg",
            ffd8ffe1: "image/jpeg",
            ffd8ffe2: "image/jpeg",
            ffd8ffe3: "image/jpeg",
            ffd8ffe8: "image/jpeg"
        }

        for (const s in signatures) {
            if (b64.indexOf(s) === 0) {
                return resolve(signatures[s])
            }
        }

        //if not image
        if(others && others.allowedExtensions){
            if(others.allowedExtensions.includes(fileType)){
                return resolve(true)
            }
        }

        return resolve(false)
    })
}


export const addCurrencyFormatting = (number: any) => {
    number = number ? number.toString().replace(/,/g, '') : 0;
    return CURRENCY_SYMBOL + ' ' + (+number ? (+number).toLocaleString("en-EU") : 0);
}

export const removeCurrencyFormatting = (number: any) => {
    if (number) {
        var result = ('' + number).replace(/[Rp]+/g, "").replace(/[₱]+/g, "").replace(/[AED]+/g, "").replace(/,/g, "");
        return result.toString().trim()
    }
}

export const isUserHasUpdateAccess = (params: any) => {
    let isAccessAllowed = true;
    let { permissionID, accessType,leadDetails, pageSlug, pageChildSlug} = params;
    let assignUserId=leadDetails?.assign_user_id;

    //CHECK ROLE ACCESS/INSURANCE DISABLE FLAG/STATUS CHECK
    if(!isUserHasAccessPage({ permissionID, accessType, assignUserId }) || +leadDetails.status_id === STATUS_SUB_STATUS['status']['lost'] || +leadDetails.doc_status_id !== 3) {

        if(pageSlug && !["customer_details"].includes(pageSlug)){
            isAccessAllowed = false;

        }
        if(pageSlug && ["customer_details"].includes(pageSlug) && (+leadDetails.sub_status_id > STATUS_SUB_STATUS['subStatus']['sent_to_insurance_broker'] || !isUserHasAccessPage({ permissionID, accessType, assignUserId }) || leadDetails.doc_status_id<2)){ //if doc status is pending or requested
            isAccessAllowed = false;
        }

        if(pageSlug === "sent_to_insurance_broker" && +leadDetails.status_id !== STATUS_SUB_STATUS['status']['lost']) {
            isAccessAllowed = true;
        }
    }else if(pageSlug) {
        if(pageSlug === "sent_to_insurance_broker" && leadDetails.sub_status_id >= STATUS_SUB_STATUS['subStatus']['sent_to_insurance_broker']) {
            isAccessAllowed = false;
        }else if(pageSlug === "policy_shared" && leadDetails.policy_shared_customer_source) {
            isAccessAllowed = false;
        }else if(pageSlug === "soft-approval-received" && leadDetails.sub_status_id >= STATUS_SUB_STATUS['subStatus']['soft_approval_received']) {
            isAccessAllowed = false;
        }else if(pageSlug === "insurance-policy-generated" && leadDetails.sub_status_id >= STATUS_SUB_STATUS['subStatus']['policy_generated']) {
            isAccessAllowed = false;
        }else if(pageSlug === "inbound_payment" && leadDetails.inbound_id && leadDetails.inbound_amount) {
            let payTenure = params.pay_tenure
            if (pageChildSlug !== 'broker' && payTenure && leadDetails.installment_details && Object.keys(leadDetails.installment_details).length - 1 !== +payTenure.split(" ")[0]) isAccessAllowed = true
            else isAccessAllowed = false;            
            
        }else if(pageSlug === "outbound_payment" && pageChildSlug) {
            if(pageChildSlug === "broker" && leadDetails.outbound_broker_id){

                isAccessAllowed = false;
            }else if(pageChildSlug === "sales_team" && leadDetails.outbound_sales_team_id){

                isAccessAllowed = false;
            }
        }else  if(["customer_details"].includes(pageSlug) && (+leadDetails.sub_status_id >= STATUS_SUB_STATUS['subStatus']['sent_to_insurance_broker']  || leadDetails.doc_status_id<2)){
            isAccessAllowed = false;
        } else if (pageSlug === "payment_from_customer_to_partner_broker" && leadDetails.pay_from_cust_to_partner_broker_id) {
            let payTenure = params.pay_tenure
            if (payTenure && leadDetails.installment_details && Object.keys(leadDetails.installment_details).length - 1 !== +payTenure.split(" ")[0]) isAccessAllowed = true
            else isAccessAllowed = false
        }
    }
    return isAccessAllowed;

}

export const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return ("th");
    switch (number % 10) {
        case 1:
            return ("st");
        case 2:
            return ("nd");
        case 3:
            return ("rd");
        default:
            return ("th");
    }
};
