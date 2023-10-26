
export const user = [
    {
        "application_id": 686,
        "work_id": 673,
        "work_reference_number": "AD02051234668",
        "org_id": 200,
        "permit_reference_number": "AD02051234668-01",
        "geometry": {
            "type": "Point",
            "coordinates": [
                506588.93971606,
                251581.817344864
            ]
        },
        "street_name": "ARROW LEYS",
        "area_name": "",
        "town": "BEDFORD",
        "postcode": null,
        "location_description": "Queen's Drive jn",
        "proposed_start_date": "2023-10-15T23:00:00.000Z",
        "proposed_end_date": "2023-10-22T23:00:00.000Z",
        "actual_start_date": "2023-10-17T07:20:10.000Z",
        "actual_end_date": null,
        "deadline_date": "2023-10-09T15:30:00.000Z",
        "reasonable_period_end_date": "2023-10-23T00:00:00.000Z",
        "traffic_sensitive_flag": false,
        "work_type": "planned",
        "work_category": "standard",
        "work_description": "TEST",
        "activity_type": "utility_asset_works",
        "traffic_management_type": "multi_way_signals",
        "traffic_management_type_display_text": "Multi Way Signals",
        "close_footway": "no",
        "close_footway_display_text": "No",
        "close_footpath": "no",
        "collaborative_working_flag": false,
        "collaboration_details": null,
        "collaborative_works": null,
        "collaboration_type": null,
        "excavation_flag": false,
        "environmental_flag": null,
        "is_covid19_response": null,
        "ttro_required_flag": false,
        "project_reference_number": "",
        "lane_rental_flag": false,
        "conditions": [
            {
                "condition": "NCT01a",
                "description": "Duration APPLIES TO ALL PERMITS on streets where the validity window does not apply"
            },
            {
                "condition": "NCT01b",
                "description": "Duration APPLIES TO ALL PERMITS on streets where the validity window applies"
            },
            {
                "condition": "NCT11a",
                "description": "Display of permit number"
            }
        ],
        "special_designations": [

        ],
        "early_start_pre_approval_flag": null,
        "early_start_reason": null,
        "pre_approval_details": null,
        "pre_approval_authoriser": null,
        "status": "granted",
        "work_status": "in_progress",
        "assessment_discount": 0,
        "assessment_comments": null,
        "assessment_status": "granted",
        "change_decision": [

        ],
        "cost_risk": 3,
        "customer_risk": 2,
        "traffic_management_risk": 3,
        "accountability": "Not Applicable",
        "paa_cost": 0,
        "permit_cost": 75,
        "variation_cost": 0,
        "proposed_variation_cost": 0,
        "fpn_cost": 0,
        "total_cost": 75,
        "calendar_days": 8,
        "working_days": 6,
        "highway_authority_name": "BEDFORD BOROUGH COUNCIL",
        "department_name": "NA",
        "promoter_prefix": "AD",
        "permit_prefix": "AD020",
        "promoter_organisation": "AWG GROUP LIMITED",
        "status_value": "Granted",
        "work_status_value": "In Progress",
        "alteration_reason": null,
        "draft_application_id": null,
        "draft_alteration_id": null,
        "draft_work_type": null,
        "alteration_status": null,
        "pending_change_details": null,
        "reasons_for_refusal": null,
        "revoke_reason": null,
        "permit_alteration_reference_number": null,
        "alteration_type": null,
        "alteration_submit_date": null,
        "additional_info": null,
        "additional_contact": null,
        "additional_contact_number": null,
        "additional_contact_email": null,
        "location_details": null,
        "work_order_no": null,
        "cancellation_reason": null,
        "work_desc_text_type": "user",
        "assessment_decision": {
            "status": "granted",
            "display_status": "Granted",
            "modification_request_details": null,
            "reason_for_refusal": null,
            "refusal_details": null,
            "dc_details": {
                "dc_status": null,
                "dc_reason": null,
                "status": null,
                "dc_response_date": null
            }
        },
        "alteration_id": null,
        "is_pmr_responded": false,
        "expected_end_date": "2023-10-22T23:00:00.000Z",
        "validity_start_date": "2023-10-16T23:00:00.000Z",
        "validity_end_date": "2023-10-19T23:00:00.000Z",
        "excavation_carried_out": false,
        "start_date": "2023-10-17T07:20:10",
        "end_date": "2023-10-22T23:00:00",
        "dc_details": {
            "dc_status": null,
            "dc_reason": null,
            "status": null,
            "dc_response_date": null
        },
        "is_duration_challenged": false,
        "emergency_contact_name": "TEST",
        "emergency_contact_number": "TEST",
        "current_traffic_management_type": "",
        "current_traffic_management_update_date": null,
        "current_traffic_management_emergency_contact_name": null,
        "current_traffic_management_emergency_contact_number": null,
        "inactive_app_list": [

        ],
        "text_color_proposed_end_date": "#2b5c41",
        "final_registration_flag": false,
        "final_registration_date": null,
        "ancillary_location_description": null,
        "ancillary_info_description": null,
        "ancillary_info_type": null,
        "ancillary_info_status": null,
        "ancillary_recorded_date": null,
        "helper_request": null,
        "actions": [
            "stop-request",
            "revert-start-request"
        ],
        "mobile_actions": [
            {
                "action_key": "stop-request",
                "action_desc": "Stop",
                "message_to_confirm": "You are now requesting Permit to be stopped AD02051234668-01",
                "message_to_inform": "Permit AD02051234668-01 has now been requested to stop",
                "message_to_cancel": "",
                "alert_messages": [
                    {
                        "message_type": "ALERT",
                        "message_domain": "PERMIT_ACTION",
                        "message_code": "MSG_ACT_PROP_END_01",
                        "message": "Note that you are about to stop the permit later than permit’s proposed end date."
                    },
                    {
                        "message_type": "ALERT",
                        "message_domain": "PERMIT_ACTION",
                        "message_code": "MSG_ACT_PROP_END_02",
                        "message": "Note that you are about to stop the permit before the permit’s proposed end date."
                    }
                ],
                "threshold_in_minutes": -1,
                "s3_bucket_name": "skewb-mobile",
                "tag": [
                    {
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/REINSTATEMENT",
                        "tag_id": "REINSTATEMENT",
                        "tag_description": "Patches with measuring stick",
                        "display_name": "Reinstatement",
                        "photo_upload_mandatory": true,
                        "message_to_confirm": "Please confirm photos are clear with measuring stick on site.",
                        "message_to_cancel": ""
                    },
                    {
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_30M_BACK",
                        "tag_id": "SITE_CLEAR_30M_BACK",
                        "tag_description": "30m back",
                        "display_name": "Site Clear 30m Back",
                        "photo_upload_mandatory": true,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": ""
                    },
                    {
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_OTHER_WAY",
                        "tag_id": "SITE_CLEAR_OTHER_WAY",
                        "tag_description": "Other way",
                        "display_name": "Site Clear 30m Other Way",
                        "photo_upload_mandatory": true,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": ""
                    }
                ]
            },
            {
                "action_key": "revert-start-request",
                "action_desc": "Request Revert Start",
                "message_to_confirm": "This action will revert the start of this permit AD02051234668-01",
                "message_to_inform": "The permit AD02051234668-01 start has now been reverted",
                "message_to_cancel": "",
                "alert_messages": [

                ],
                "threshold_in_minutes": -1,
                "s3_bucket_name": "skewb-mobile",
                "tag": [

                ]
            }
        ],
        "desktop_access": null,
        "ssm_images": [
            {
                "action_key": "start",
                "action_display_text": "Start",
                "s3_bucket_name": "skewb-mobile",
                "tags": [
                    {
                        "tag_id": "PERMIT_DASHBOARD",
                        "tag_description": "",
                        "tag_display_name": "Permit Board",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": true,
                        "message_to_confirm": "Please confirm Permit Reference is captured correctly in the permit board.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD",
                        "images": [
                            {
                                "image_id": 449,
                                "image_name": "mrousavy2870104313437393322.jpg",
                                "image_size": 2296878,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy2870104313437393322.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 10,
                                    "minute": 42,
                                    "second": 13,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            },
                            {
                                "image_id": 453,
                                "image_name": "mrousavy3569644467726722363.jpg",
                                "image_size": 3137029,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy3569644467726722363.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 11,
                                    "minute": 36,
                                    "second": 40,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            },
                            {
                                "image_id": 454,
                                "image_name": "mrousavy5728336740407422169.jpg",
                                "image_size": 2486178,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy5728336740407422169.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 11,
                                    "minute": 39,
                                    "second": 22,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            },
                            {
                                "image_id": 455,
                                "image_name": "mrousavy530761985064182671.jpg",
                                "image_size": 2833981,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy530761985064182671.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 11,
                                    "minute": 44,
                                    "second": 8,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            }
                        ]
                    }
                ]
            },
            {
                "action_key": "stop",
                "action_display_text": "Stop",
                "s3_bucket_name": "skewb-mobile",
                "tags": [
                    {
                        "tag_id": "REINSTATEMENT",
                        "tag_description": "Patches with measuring stick",
                        "tag_display_name": "Reinstatement",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": false,
                        "message_to_confirm": "Please confirm photos are clear with measuring stick on site.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/REINSTATEMENT",
                        "images": [
                            {
                                "image_id": 513,
                                "image_name": "mrousavy1415991203748054570.jpg",
                                "image_size": 2556319,
                                "image_path": "ssm/dev/AD02051234668-01/stop/REINSTATEMENT/mrousavy1415991203748054570.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "stop-request",
                                "image_tag": "REINSTATEMENT",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 10,
                                    "minute": 4,
                                    "second": 56,
                                    "dayOfYear": 291,
                                    "dayOfWeek": "WEDNESDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 18,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            }
                        ]
                    },
                    {
                        "tag_id": "SITE_CLEAR_30M_BACK",
                        "tag_description": "30m back",
                        "tag_display_name": "Site Clear 30m Back",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": false,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_30M_BACK",
                        "images": [

                        ]
                    },
                    {
                        "tag_id": "SITE_CLEAR_OTHER_WAY",
                        "tag_description": "Other way",
                        "tag_display_name": "Site Clear 30m Other Way",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": false,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_OTHER_WAY",
                        "images": [

                        ]
                    }
                ]
            }
        ],
        "mobile_ssm_status": "In Progress",
        "mobile_permit_holder": "Started",
        "ssm_detail": {
            "start_date": "2023-10-17T07:20:10",
            "start_user": "test@jamestyremangmail.onmicrosoft.com",
            "start_user_comment": "",
            "stop_date": null,
            "stop_user": null,
            "stop_user_comment": null,
            "revert_start_date": null,
            "revert_start_user": null,
            "revert_start_user_comment": null,
            "revert_stop_date": null,
            "revert_stop_user": null,
            "revert_stop_user_comment": null,
            "start_request_date": null,
            "start_request_user": null,
            "start_request_user_comment": null,
            "stop_request_date": null,
            "stop_request_user": null,
            "stop_request_user_comment": null,
            "revert_start_request_date": null,
            "revert_start_request_user": null,
            "revert_start_request_user_comment": null,
            "revert_stop_request_date": null,
            "revert_stop_request_user": null,
            "revert_stop_request_user_comment": null,
            "current_status": "WORK_START_LOGGED"
        },
        "messages": null
    },
    {
        "application_id": 686,
        "work_id": 673,
        "work_reference_number": "AD02051234668",
        "org_id": 200,
        "permit_reference_number": "AD02051234668-01",
        "geometry": {
            "type": "Point",
            "coordinates": [
                506588.93971606,
                251581.817344864
            ]
        },
        "street_name": "ARROW LEYS",
        "area_name": "",
        "town": "BEDFORD",
        "postcode": null,
        "location_description": "Queen's Drive jn",
        "proposed_start_date": "2023-10-15T23:00:00.000Z",
        "proposed_end_date": "2023-10-22T23:00:00.000Z",
        "actual_start_date": "2023-10-17T07:20:10.000Z",
        "actual_end_date": null,
        "deadline_date": "2023-10-09T15:30:00.000Z",
        "reasonable_period_end_date": "2023-10-23T00:00:00.000Z",
        "traffic_sensitive_flag": false,
        "work_type": "planned",
        "work_category": "standard",
        "work_description": "TEST",
        "activity_type": "utility_asset_works",
        "traffic_management_type": "multi_way_signals",
        "traffic_management_type_display_text": "Multi Way Signals",
        "close_footway": "no",
        "close_footway_display_text": "No",
        "close_footpath": "no",
        "collaborative_working_flag": false,
        "collaboration_details": null,
        "collaborative_works": null,
        "collaboration_type": null,
        "excavation_flag": false,
        "environmental_flag": null,
        "is_covid19_response": null,
        "ttro_required_flag": false,
        "project_reference_number": "",
        "lane_rental_flag": false,
        "conditions": [
            {
                "condition": "NCT01a",
                "description": "Duration APPLIES TO ALL PERMITS on streets where the validity window does not apply"
            },
            {
                "condition": "NCT01b",
                "description": "Duration APPLIES TO ALL PERMITS on streets where the validity window applies"
            },
            {
                "condition": "NCT11a",
                "description": "Display of permit number"
            }
        ],
        "special_designations": [

        ],
        "early_start_pre_approval_flag": null,
        "early_start_reason": null,
        "pre_approval_details": null,
        "pre_approval_authoriser": null,
        "status": "granted",
        "work_status": "in_progress",
        "assessment_discount": 0,
        "assessment_comments": null,
        "assessment_status": "granted",
        "change_decision": [

        ],
        "cost_risk": 3,
        "customer_risk": 2,
        "traffic_management_risk": 3,
        "accountability": "Not Applicable",
        "paa_cost": 0,
        "permit_cost": 75,
        "variation_cost": 0,
        "proposed_variation_cost": 0,
        "fpn_cost": 0,
        "total_cost": 75,
        "calendar_days": 8,
        "working_days": 6,
        "highway_authority_name": "BEDFORD BOROUGH COUNCIL",
        "department_name": "NA",
        "promoter_prefix": "AD",
        "permit_prefix": "AD020",
        "promoter_organisation": "AWG GROUP LIMITED",
        "status_value": "Granted",
        "work_status_value": "In Progress",
        "alteration_reason": null,
        "draft_application_id": null,
        "draft_alteration_id": null,
        "draft_work_type": null,
        "alteration_status": null,
        "pending_change_details": null,
        "reasons_for_refusal": null,
        "revoke_reason": null,
        "permit_alteration_reference_number": null,
        "alteration_type": null,
        "alteration_submit_date": null,
        "additional_info": null,
        "additional_contact": null,
        "additional_contact_number": null,
        "additional_contact_email": null,
        "location_details": null,
        "work_order_no": null,
        "cancellation_reason": null,
        "work_desc_text_type": "user",
        "assessment_decision": {
            "status": "granted",
            "display_status": "Granted",
            "modification_request_details": null,
            "reason_for_refusal": null,
            "refusal_details": null,
            "dc_details": {
                "dc_status": null,
                "dc_reason": null,
                "status": null,
                "dc_response_date": null
            }
        },
        "alteration_id": null,
        "is_pmr_responded": false,
        "expected_end_date": "2023-10-22T23:00:00.000Z",
        "validity_start_date": "2023-10-16T23:00:00.000Z",
        "validity_end_date": "2023-10-19T23:00:00.000Z",
        "excavation_carried_out": false,
        "start_date": "2023-10-17T07:20:10",
        "end_date": "2023-10-22T23:00:00",
        "dc_details": {
            "dc_status": null,
            "dc_reason": null,
            "status": null,
            "dc_response_date": null
        },
        "is_duration_challenged": false,
        "emergency_contact_name": "TEST",
        "emergency_contact_number": "TEST",
        "current_traffic_management_type": "",
        "current_traffic_management_update_date": null,
        "current_traffic_management_emergency_contact_name": null,
        "current_traffic_management_emergency_contact_number": null,
        "inactive_app_list": [

        ],
        "text_color_proposed_end_date": "#2b5c41",
        "final_registration_flag": false,
        "final_registration_date": null,
        "ancillary_location_description": null,
        "ancillary_info_description": null,
        "ancillary_info_type": null,
        "ancillary_info_status": null,
        "ancillary_recorded_date": null,
        "helper_request": null,
        "actions": [

        ],
        "mobile_actions": [
            {
                "action_key": "stop-request",
                "action_desc": "Stop",
                "message_to_confirm": "You are now requesting Permit to be stopped AD02051234668-01",
                "message_to_inform": "Permit AD02051234668-01 has now been requested to stop",
                "message_to_cancel": "",
                "alert_messages": [
                    {
                        "message_type": "ALERT",
                        "message_domain": "PERMIT_ACTION",
                        "message_code": "MSG_ACT_PROP_END_01",
                        "message": "Note that you are about to stop the permit later than permit’s proposed end date."
                    },
                    {
                        "message_type": "ALERT",
                        "message_domain": "PERMIT_ACTION",
                        "message_code": "MSG_ACT_PROP_END_02",
                        "message": "Note that you are about to stop the permit before the permit’s proposed end date."
                    }
                ],
                "threshold_in_minutes": -1,
                "s3_bucket_name": "skewb-mobile",
                "tag": [
                    {
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/REINSTATEMENT",
                        "tag_id": "REINSTATEMENT",
                        "tag_description": "Patches with measuring stick",
                        "display_name": "Reinstatement",
                        "photo_upload_mandatory": true,
                        "message_to_confirm": "Please confirm photos are clear with measuring stick on site.",
                        "message_to_cancel": ""
                    },
                    {
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_30M_BACK",
                        "tag_id": "SITE_CLEAR_30M_BACK",
                        "tag_description": "30m back",
                        "display_name": "Site Clear 30m Back",
                        "photo_upload_mandatory": true,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": ""
                    },
                    {
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_OTHER_WAY",
                        "tag_id": "SITE_CLEAR_OTHER_WAY",
                        "tag_description": "Other way",
                        "display_name": "Site Clear 30m Other Way",
                        "photo_upload_mandatory": true,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": ""
                    }
                ]
            },
            {
                "action_key": "revert-start-request",
                "action_desc": "Request Revert Start",
                "message_to_confirm": "This action will revert the start of this permit AD02051234668-01",
                "message_to_inform": "The permit AD02051234668-01 start has now been reverted",
                "message_to_cancel": "",
                "alert_messages": [

                ],
                "threshold_in_minutes": -1,
                "s3_bucket_name": "skewb-mobile",
                "tag": [

                ]
            }
        ],
        "desktop_access": null,
        "ssm_images": [
            {
                "action_key": "start",
                "action_display_text": "Start",
                "s3_bucket_name": "skewb-mobile",
                "tags": [
                    {
                        "tag_id": "PERMIT_DASHBOARD",
                        "tag_description": "",
                        "tag_display_name": "Permit Board",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": true,
                        "message_to_confirm": "Please confirm Permit Reference is captured correctly in the permit board.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD",
                        "images": [
                            {
                                "image_id": 449,
                                "image_name": "mrousavy2870104313437393322.jpg",
                                "image_size": 2296878,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy2870104313437393322.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 10,
                                    "minute": 42,
                                    "second": 13,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            },
                            {
                                "image_id": 453,
                                "image_name": "mrousavy3569644467726722363.jpg",
                                "image_size": 3137029,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy3569644467726722363.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 11,
                                    "minute": 36,
                                    "second": 40,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            },
                            {
                                "image_id": 454,
                                "image_name": "mrousavy5728336740407422169.jpg",
                                "image_size": 2486178,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy5728336740407422169.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 11,
                                    "minute": 39,
                                    "second": 22,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            },
                            {
                                "image_id": 455,
                                "image_name": "mrousavy530761985064182671.jpg",
                                "image_size": 2833981,
                                "image_path": "ssm/dev/AD02051234668-01/start/PERMIT_DASHBOARD/mrousavy530761985064182671.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "start",
                                "image_tag": "PERMIT_DASHBOARD",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 11,
                                    "minute": 44,
                                    "second": 8,
                                    "dayOfYear": 289,
                                    "dayOfWeek": "MONDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 16,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            }
                        ]
                    }
                ]
            },
            {
                "action_key": "stop",
                "action_display_text": "Stop",
                "s3_bucket_name": "skewb-mobile",
                "tags": [
                    {
                        "tag_id": "REINSTATEMENT",
                        "tag_description": "Patches with measuring stick",
                        "tag_display_name": "Reinstatement",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": false,
                        "message_to_confirm": "Please confirm photos are clear with measuring stick on site.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/REINSTATEMENT",
                        "images": [
                            {
                                "image_id": 513,
                                "image_name": "mrousavy1415991203748054570.jpg",
                                "image_size": 2556319,
                                "image_path": "ssm/dev/AD02051234668-01/stop/REINSTATEMENT/mrousavy1415991203748054570.jpg",
                                "image_status": null,
                                "image_status_code": null,
                                "image_rejected_reason": null,
                                "image_rejected_reason_display_text": null,
                                "image_remark": null,
                                "image_status_update_user": null,
                                "image_status_change_date": null,
                                "allow_delete": true,
                                "image_action": "stop-request",
                                "image_tag": "REINSTATEMENT",
                                "submitted_by": "test@jamestyremangmail.onmicrosoft.com",
                                "submitted_date": {
                                    "year": 2023,
                                    "monthValue": 10,
                                    "hour": 10,
                                    "minute": 4,
                                    "second": 56,
                                    "dayOfYear": 291,
                                    "dayOfWeek": "WEDNESDAY",
                                    "month": "OCTOBER",
                                    "dayOfMonth": 18,
                                    "nano": 0,
                                    "chronology": {
                                        "calendarType": "iso8601",
                                        "id": "ISO"
                                    }
                                },
                                "image_uploaded_from": "MOBILE"
                            }
                        ]
                    },
                    {
                        "tag_id": "SITE_CLEAR_30M_BACK",
                        "tag_description": "30m back",
                        "tag_display_name": "Site Clear 30m Back",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": false,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_30M_BACK",
                        "images": [

                        ]
                    },
                    {
                        "tag_id": "SITE_CLEAR_OTHER_WAY",
                        "tag_description": "Other way",
                        "tag_display_name": "Site Clear 30m Other Way",
                        "allow_photo_upload_desktop": null,
                        "allow_photo_upload_mobile": false,
                        "message_to_confirm": "Please confirm site is completely clear of all SLG, TM and Plant, and permit can be closed.",
                        "message_to_cancel": "",
                        "s3_folder_name": "ssm/dev/AD02051234668-01/stop/SITE_CLEAR_OTHER_WAY",
                        "images": [

                        ]
                    }
                ]
            }
        ],
        "mobile_ssm_status": "In Progress",
        "mobile_permit_holder": "Started",
        "ssm_detail": {
            "start_date": "2023-10-17T07:20:10",
            "start_user": "test@jamestyremangmail.onmicrosoft.com",
            "start_user_comment": "",
            "stop_date": null,
            "stop_user": null,
            "stop_user_comment": null,
            "revert_start_date": null,
            "revert_start_user": null,
            "revert_start_user_comment": null,
            "revert_stop_date": null,
            "revert_stop_user": null,
            "revert_stop_user_comment": null,
            "start_request_date": null,
            "start_request_user": null,
            "start_request_user_comment": null,
            "stop_request_date": null,
            "stop_request_user": null,
            "stop_request_user_comment": null,
            "revert_start_request_date": null,
            "revert_start_request_user": null,
            "revert_start_request_user_comment": null,
            "revert_stop_request_date": null,
            "revert_stop_request_user": null,
            "revert_stop_request_user_comment": null,
            "current_status": "WORK_START_LOGGED"
        },
        "messages": null
    }

]


// {
//     street: "123 Main St1",
//     city: "Anytown1",
//     country: "US1"
// },
// {
//     street: "aaa",
//     city: "Anytown2",
//     country: "S.colony"
// },
// {
//     street: "bbbb",
//     city: "Anytown3",
//     country: "Simmakal"
// },
// {
//     street: "cccc",
//     city: "madurai",
//     country: "In"
// },
// {
//     street: "ssss",
//     city: "fff",
//     country: "madurai"
// },
// {
//     street: "madurai",
//     city: "ssss",
//     country: "bbbb"
// },