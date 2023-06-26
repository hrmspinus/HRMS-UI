function masterHeaders(){
  return (
[
  {
    "masterName": "Department",
    "headerName":
       [
        {jsonHeader:"departmentName", htmlHeader:"Department Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "Designation",
    "headerName":
       [
        {jsonHeader:"designationName", htmlHeader:"Designation Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
      
      
      ]
  },
  {
    "masterName": "LeaveType",
    "headerName":
       [
        {jsonHeader:"leaveTypeName", htmlHeader:"LeaveType Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "EmployeeType",
    "headerName":
       [
        {jsonHeader:"employeeTypeName", htmlHeader:"EmployeeType Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "AddressType",
    "headerName":
       [
        {jsonHeader:"addressTypeName", htmlHeader:"AddressType Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "BloodGroup",
    "headerName":
       [
        {jsonHeader:"bloodGroupName", htmlHeader:"BloodGroup Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "Location",
    "headerName":
       [
        {jsonHeader:"locationName", htmlHeader:"Location Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "Relationship",
    "headerName":
       [
        {jsonHeader:"relationShipName", htmlHeader:"Relationship Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "ClaimType",
    "headerName":
       [
        {jsonHeader:"claimTypeName", htmlHeader:"ClaimType Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "AppraisalObjectives",
    "headerName":
       [
        {jsonHeader:"appraisalName", htmlHeader:"AppraisalObjectives Name"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "HrmsUser",
    "headerName":
       [
        {jsonHeader:"roleName", htmlHeader:"Role Name"
        ,edit:"false"}
        ,{jsonHeader:"roleID", htmlHeader:"Role Name"
        ,controlType :"selectOption"
        ,parentName :"HrmsRole"
        ,selectKey:"roleID"
        ,selectValue:"roleName"
        ,visible:"false"
      },
      
        {jsonHeader:"userName", htmlHeader:"User Name"},
        {jsonHeader:"firstName", htmlHeader:"First Name"},
        {jsonHeader:"lastName", htmlHeader:"Last Name"},
        {jsonHeader:"middleName", htmlHeader:"Middle Name"},

        

     
        
       
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "HrmsRole",
    "headerName":
       [
        {jsonHeader:"roleName", htmlHeader:"Role Name"},
        {jsonHeader:"roleID", htmlHeader:"Role ID"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
      
      
      ]
  },
  {
    "masterName": "HrmsPage",
    "headerName":
       [
        {jsonHeader:"pageName", htmlHeader:"Page Name"},
        {jsonHeader:"roleID", htmlHeader:"Role ID"},
        {jsonHeader:"pageID", htmlHeader:"Page ID"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"}
        
    
      
      ]
  },
  {
    "masterName": "EmployeeDetails",
    "headerName":
       [ 
        // {jsonHeader:"organisationID", htmlHeader:"Organisation ID"},
        // {jsonHeader:"autoNumber", htmlHeader:"Auto Number "},
        // {jsonHeader:"firstName", htmlHeader:"First Name"},
        // {jsonHeader:"middleName", htmlHeader:"Middle Name"},
        // {jsonHeader:"lastName", htmlHeader:"Last Name"},
        {jsonHeader:"employeeName", htmlHeader:"Employee Name",controlType :"link"},
        {jsonHeader:"dateOfBirth", htmlHeader:"Date Of Birth",controlType :"Calender"},
        {jsonHeader:"age", htmlHeader:"Age"},
    
      //   {jsonHeader:"gender", htmlHeader:"Gender"
      //   ,edit:"false"}
      //   ,{jsonHeader:"employeeID", htmlHeader:"Gender"
      //   ,controlType :"selectOption"
      //   ,parentName :"EmployeeDetails"
      //   ,selectKey:"employeeID"
      //   ,selectValue:"handleChange"
      //   ,visible:"false"
      // },
        {jsonHeader:"gender", htmlHeader:"Gender"},
        {jsonHeader:"email", htmlHeader:"Email"},
        {jsonHeader:"phoneNumber", htmlHeader:"Phone Number"},
        {jsonHeader:"emergencyContactNumber", htmlHeader:"Emergency Contact Number"},
        {jsonHeader:"location", htmlHeader:"Location"},
        {jsonHeader:"maritalStatus", htmlHeader:"Marital Status"},
        {jsonHeader:"hireDate", htmlHeader:"Hire Date"},
        //  {jsonHeader:"managerID", htmlHeader:"Manager ID"},
       {jsonHeader:"managerName", htmlHeader:"Manager Name"},
        // {jsonHeader:"businessTitleID", htmlHeader:"Business Title ID"},
        // {jsonHeader:"departmentID", htmlHeader:"Department ID"},
        {jsonHeader:"departmentName", htmlHeader:"Department Name"},
        // {jsonHeader:"designationID", htmlHeader:"Designation ID"},
        {jsonHeader:"designationName", htmlHeader:"Designation Name"},
        // {jsonHeader:"bloodGroupID", htmlHeader:"BloodGroup ID"},
        {jsonHeader:"bloodGroupName", htmlHeader:"BloodGroup Name"},
        // {jsonHeader:"createdBy", htmlHeader:"Created By"},
        // {jsonHeader:"modifiedBy", htmlHeader:"Modified By"}
    
      
      ]
  },
  {
    "masterName": "EmployeeExperience",
    "headerName":
       [ 
        {jsonHeader:"employeeID", htmlHeader:"Employee ID"},
        {jsonHeader:"companyName", htmlHeader:"Company Name "},
        {jsonHeader:"designation", htmlHeader:"Designation"},
        {jsonHeader:"startDate", htmlHeader:"start Date"},
        {jsonHeader:"endDate", htmlHeader:"End Date"},
        {jsonHeader:"yearsWorked", htmlHeader:"Years Worked"},
        {jsonHeader:"salary", htmlHeader:"Salary"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"},
        {jsonHeader:"modifiedBy", htmlHeader:"Modified By"}
    
      
      ]
  },
  {
    "masterName": "EmployeeFamilyDetail",
    "headerName":
       [ 
        {jsonHeader:"employeeID", htmlHeader:"Employee ID"},
        {jsonHeader:"name", htmlHeader:"Name"},
        {jsonHeader:"relationShip", htmlHeader:"RelationShip"},
        {jsonHeader:"age", htmlHeader:"Age"},
        {jsonHeader:"dob", htmlHeader:"Dob"},
        {jsonHeader:"contactNo", htmlHeader:"Contact No"},
        {jsonHeader:"createdBy", htmlHeader:"Created By"},
        {jsonHeader:"modifiedBy", htmlHeader:"Modified By"}
    
      
      ]
  }
  
  
]
  

  )
}
export default masterHeaders;