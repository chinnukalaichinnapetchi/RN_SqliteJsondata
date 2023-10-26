import { Realm, RealmProvider, useRealm, useQuery } from '@realm/react'
// Declare Schema
class UserSchema extends Realm.Object { }

const SSMImageSchema = {
    name: 'SSMImage',
    properties: {
        action_key: 'string',
        action_display_text: 'string',
        s3_bucket_name: 'string',
        // Other fields...
    }
};

const ConditionSchema = {

    name: 'Condition',
    properties: {
        condition: 'string',
        description: 'string',
    }
};
const AssessmentDecisionSchema = {

    name: 'AssessmentDecision',
    properties: {

        status: 'string',
        display_status: 'string',
        // Further nested fields for 'modification_request_details' and 'dc_details' can be added here
    }
};
const ssm_detailschema = {

    name: 'SSMdetail',
    properties: {
        start_date: 'date?',
        start_user: 'string?',
        start_user_comment: 'string?',
        stop_date: 'date?',
        stop_user: 'string?',
        stop_user_comment: 'string?',
        revert_start_date: 'date?',
        revert_start_user: 'string?',
        revert_start_user_comment: 'string?',
        revert_stop_date: 'date?',
        revert_stop_user: 'string?',
        revert_stop_user_comment: 'string?',
        start_request_date: 'date?',
        start_request_user: 'string?',
        start_request_user_comment: 'string?',
        stop_request_date: 'date?',
        stop_request_user: 'string?',
        stop_request_user_comment: 'string?',
        revert_start_request_date: 'date?',
        revert_start_request_user: 'string?',
        revert_start_request_user_comment: 'string?',
        revert_stop_request_date: 'date?',
        revert_stop_request_user: 'string?',
        revert_stop_request_user_comment: 'string?',
        current_status: 'string'
    },

}
const MobileActionSchema = {
    name: 'MobileAction',
    embedded: true,
    properties: {
        action_key: 'string',
        action_desc: 'string',
        message_to_confirm: 'string',
        message_to_inform: 'string',
        message_to_cancel: 'string',
        alert_messages: 'AlertMessage[]',
        threshold_in_minutes: 'int',
        s3_bucket_name: 'string',
        tag: 'Tag[]'
    }
};

const AlertMessageSchema = {
    name: 'AlertMessage',
    embedded: true,
    properties: {
        message_type: 'string',
        message_domain: 'string',
        message_code: 'string',
        message: 'string'
    }
};

const TagSchema = {
    name: 'Tag',
    embedded: true,
    properties: {
        s3_folder_name: 'string',
        tag_id: 'string',
        tag_description: 'string',
        display_name: 'string',
        photo_upload_mandatory: 'bool',
        message_to_confirm: 'string',
        message_to_cancel: 'string'
    }
};
const dcDetailschema = {
    name: 'dc_datail',
    properties: {
        dc_status: 'Emptyobj?',
        dc_reason: 'Emptyobj?',
        status: 'Emptyobj?',
        dc_response_date: 'Emptyobj?'
    },



}

const GeometrySchema1 = {
    name: 'Geometry',
    properties: {
        type: 'string',
        coordinates: 'double[]',  // This defines an array of doubles.
    }
};
const Emptyobj = {

    name: 'Emptyobj',
    properties: {
        // Define properties  here
    }
};





UserSchema.schema = {
    name: 'User',
    properties: {

        application_id: 'int',
        work_id: 'int',
        work_reference_number: "string",
        org_id: 'int',
        permit_reference_number: "string",
        geometry: 'Geometry?',
        street_name: "string",
        area_name: "string",
        town: "string",
        postcode: { type: 'string', optional: true },
        location_description: "string",
        proposed_start_date: "string",
        proposed_end_date: "string",
        actual_start_date: "string",
        actual_end_date: { type: 'string', optional: true },
        deadline_date: "string",
        reasonable_period_end_date: "string",
        traffic_sensitive_flag: "bool",
        work_type: "string",
        work_category: "string",
        work_description: "string",
        activity_type: "string",
        traffic_management_type: "string",
        traffic_management_type_display_text: "string",
        close_footway: "string",
        close_footway_display_text: "string",
        close_footpath: "string",
        collaborative_working_flag: "bool",
        collaboration_details: 'Emptyobj?',
        collaborative_works: 'Emptyobj?',
        collaboration_type: 'Emptyobj?',
        excavation_flag: "bool",
        environmental_flag: 'mixed?',
        is_covid19_response: 'Emptyobj?',
        ttro_required_flag: "bool",
        project_reference_number: "string",
        lane_rental_flag: "bool",
        conditions: 'Condition[]',
        special_designations: 'int?[]',
        early_start_pre_approval_flag: 'Emptyobj?',
        early_start_reason: 'Emptyobj?',
        pre_approval_details: 'Emptyobj?',
        pre_approval_authoriser: 'Emptyobj?',
        status: "string",
        work_status: "string",
        assessment_discount: "int",
        assessment_comments: 'Emptyobj?',
        assessment_status: "string",
        change_decision: 'int?[]',
        cost_risk: 'int',
        customer_risk: 'int',
        traffic_management_risk: 'int',
        accountability: "string",
        paa_cost: 'int',
        permit_cost: 'int',
        variation_cost: 'int',
        proposed_variation_cost: 'int',
        fpn_cost: 'int',
        total_cost: 'int',
        calendar_days: 'int',
        working_days: 'int',
        highway_authority_name: "string",
        department_name: "string",
        promoter_prefix: "string",
        permit_prefix: "string",
        promoter_organisation: "string",
        status_value: "string",
        work_status_value: "string",
        alteration_reason: 'Emptyobj?',
        draft_application_id: 'Emptyobj?',
        draft_alteration_id: 'Emptyobj?',
        draft_work_type: 'Emptyobj?',
        alteration_status: 'Emptyobj?',
        pending_change_details: 'Emptyobj?',
        reasons_for_refusal: 'Emptyobj?',
        revoke_reason: 'Emptyobj?',
        permit_alteration_reference_number: 'Emptyobj?',
        alteration_type: 'Emptyobj?',
        alteration_submit_date: 'Emptyobj?',
        additional_info: 'Emptyobj?',
        additional_contact: 'Emptyobj?',
        additional_contact_number: 'Emptyobj?',
        additional_contact_email: 'Emptyobj?',
        location_details: 'Emptyobj?',
        work_order_no: 'Emptyobj?',
        cancellation_reason: 'Emptyobj?',
        work_desc_text_type: "string",
        assessment_decision: 'AssessmentDecision',
        alteration_id: 'Emptyobj?',
        is_pmr_responded: "bool",
        expected_end_date: "string",
        validity_start_date: "string",
        validity_end_date: "string",
        excavation_carried_out: "bool",
        start_date: "string",
        end_date: "string",
        dc_details: 'dc_datail?',
        is_duration_challenged: "bool",
        emergency_contact_name: "string",
        emergency_contact_number: "string",
        current_traffic_management_type: "string",
        current_traffic_management_update_date: 'Emptyobj?',
        current_traffic_management_emergency_contact_name: 'Emptyobj?',
        current_traffic_management_emergency_contact_number: 'Emptyobj?',
        inactive_app_list: 'int?[]',
        text_color_proposed_end_date: "string",
        final_registration_flag: "bool",
        final_registration_date: 'Emptyobj?',
        ancillary_location_description: 'Emptyobj?',
        ancillary_info_description: 'Emptyobj?',
        ancillary_info_type: 'Emptyobj?',
        ancillary_info_status: 'Emptyobj?',
        ancillary_recorded_date: 'Emptyobj?',
        helper_request: 'Emptyobj?',
        actions: 'string[]',
        mobile_actions: 'MobileAction[]',
        desktop_access: 'Emptyobj?',
        ssm_images: 'SSMImage[]',
        mobile_ssm_status: "string",
        mobile_permit_holder: "string",
        ssm_detail: 'SSMdetail?',
        messages: 'Emptyobj?'
    }





};

// Create realm

let realm = new Realm({
    schema: [UserSchema, ssm_detailschema, GeometrySchema1, dcDetailschema, AssessmentDecisionSchema,
        SSMImageSchema, ConditionSchema, MobileActionSchema, AlertMessageSchema, TagSchema, Emptyobj], schemaVersion: 2
});

// Export the realm
export default realm;