import { useEffect,useState } from "react";

function masterRequest(){
  return (
    
  [
    {
      "masterName": "Department",
      "requestJson":
      [
        {
            "DepartmentName":null
            
          , "DepartmentId":"00000000-0000-0000-0000-000000000000"
          , "createdBy" : null

        }
      ]
    },
    {
      "masterName": "Designation",
      "requestJson":
      [
        {
            "designationName":null
            
          , "designationId":"00000000-0000-0000-0000-000000000000"
          , "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "LeaveType",
      "requestJson":
      [
        {
            "leaveTypeName":null
            
          , "leaveTypeId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "EmployeeType",
      "requestJson":
      [
        {
            "employeeTypeName":null
            
          , "employeeTypeId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "AddressType",
      "requestJson":
      [
        {
            "addressTypeName":null
            
          , "addressTypeId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "BloodGroup",
      "requestJson":
      [
        {
            "bloodGroupName":null
            
          , "bloodGroupID":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "Location",
      "requestJson":
      [
        {
            "locationName":null
            
          , "locationID":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "Relationship",
      "requestJson":
      [
        {
            "relationShipName":null
            
          , "relationShipId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "ClaimType",
      "requestJson":
      [
        {
            "claimTypeName":null
            
          , "claimTypeId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "AppraisalObjectives",
      "requestJson":
      [
        {
            "appraisalName":null
            
          , "appraisalId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "HrmsUser",
      "requestJson":
      [
        {
            
            "userName":null,
            "firstName":null,
            "lastName":null,
            "middleName":null,
            
            
            
           "hrmsUserID":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "HrmsRole",
      "requestJson":
      [
        {
            "roleName":null
            
          , "roleId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
        

        }
      ]
    },
    {
      "masterName": "HrmsPage",
      "requestJson":
      [
        {
            "pageName":null,
            "roleID":"00000000-0000-0000-0000-000000000000"
            
          , "pageId":"00000000-0000-0000-0000-000000000000",
             "createdBy" : null
          

        }
      ]
    },
    {
      "masterName": "EmployeeDetails",
      "requestJson":
      [
        {   
            // "organisationID":null,
            // "autoNumber":null,
            "firstName":null,
            "middleName":null,
            "lastName":null,
            "employeeName":null,
            "dateOfBirth":null,
            "age":null,
            "gender":null,
            "email":null,
            "phoneNumber":null,
            "emergencyContactNumber":null,
            "location":null,
            "maritalStatus":null,
            "hireDate":null,
            // "managerID":null,
            "managerName":null,
            // "businessTitleID":null,
            // "departmentID":null,
            "departmentName":null,
            // "designationID":null,
            "designationName":null,
            // "bloodGroupID":null,
            "bloodGroupName":null
            // "createdBy":null,
            // "modifiedBy":null


            
          , "employeeID":"00000000-0000-0000-0000-000000000000"
             
          

        }
      ]
    },
    {
      "masterName": "EmployeeExperience",
      "requestJson":
      [
        {   
            "employeeID":null,
            "companyName":null,
            "designation":null,
            "startDate":null,
            "endDate":null,
            "yearsWorked":null,
            "salary":null,
            "createdBy":null,
            "modifiedBy":null


            
          , "employeeExperienceID":"00000000-0000-0000-0000-000000000000"
             
          

        }
      ]
    },
    {
      "masterName": "EmployeeFamilyDetail",
      "requestJson":
      [
        {   
            "employeeID":null,
            "name":null,
            "relationShip":null,
            "startDate":null,
            "age":null,
            "dob":null,
            "contactNo":null,
            "createdBy":null,
            "modifiedBy":null


            
          , "employeeFamilyDetailID":"00000000-0000-0000-0000-000000000000"
             
          

        }
      ]
    }
  ]
  
  )
}
export default masterRequest;