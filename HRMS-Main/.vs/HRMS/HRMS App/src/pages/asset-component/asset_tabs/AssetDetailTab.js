import React, { useState,useEffect } from 'react';
import '../assets-component.css';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import product_img from '../../../assets/images/product.png';
import edit_icon from '../../../assets/images/edit_icon.png';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import leftarrow from '../../../assets/images/left-arrow.png';
import back_arrow from '../../../assets/images/back_arrow.png';
import { Configuration } from "../../../config/index";
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Radio from './Radio';
export default function AssetDetailTab({tabactive}) {
  const query = new URLSearchParams(useLocation().search);
  var queryId=query.get('id');
  const [activeTab, setActiveTab] = useState('1');
  const BASE_URL = (url) => Configuration.BASE_URL + url;
  const EmployeeItemUrl=BASE_URL('/EmployeeDetails/GetEmployeeDetails?EmployeeID='+queryId);
  const AssetEditUrl="/assets_detail_edit?AssetId="+queryId;
   const [EmployeeItem, setEmployeeItem]= useState([]);
   const [AssetPartsList, setAssetPartsList]= useState([]);
   const [startDate, setStartDate] = useState();
   const [GenderItem, setGenderItem] = useState();


   const genderlist = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
   useEffect(() => {
    fetch(EmployeeItemUrl)
    .then(res => {
        
        if (res.status >= 400) {
            throw new Error("Server responds with error!")
        }
        return res.json()
    })
    .then(data => {debugger;

        
        setGenderItem(genderlist.filter(a => a.label == data[0].gender)[0].value);
        var dt=new Date(data[0].hireDate);
        setEmployeeItem(data[0]);
        setStartDate(dt);
        })


}, []);

    
        

  return (
    <div className='asset_detail_tabs_outer_wrap'>
        <div className='asset_detail_nav_wrap'>
            <Nav tabs>
                <NavItem>
                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        Employee Details 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab ==='2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        Employee Experience
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    Employee Family Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                        Employee Qualification
                    </NavLink>
                </NavItem>
            </Nav>
            <div className='asset_edit_icon_outer_wrap'>
                <Link to={AssetEditUrl}>
                    <img src={edit_icon} alt="edit_icon.png"/>
                </Link>
            </div>
        </div>
        
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <div className='asset_detail_tab_row_wrap'>
                    <div className='asset_detail_tab_left_card_wrap'>
                        <div className='asset_detail_tab_header_card_wrap'>
                            <h4>Personal Info.</h4>
                        </div>
                        <div className='asset_detail_tab_header_body_wrap'>
                            <div className='asset_detail_tab_field_row_wrap'>
                                <div className='asset_detail_tab_fields_wrap'>
                                    <ul>
                                        {/* <li>
                                            <h4>First Name</h4>
                                            <h5>{EmployeeItem.firstName }</h5>
                                        </li>
                                        <li>
                                            <h4>Last Name</h4>
                                            <h5>{EmployeeItem.lastName }</h5>
                                        </li>
                                        <li>
                                            <h4>Middle Name</h4>
                                            <h5>{EmployeeItem.middleName }</h5>
                                        </li> */}
                                        <li>
                                            <h4>Employee Name</h4>
                                            <h5>{EmployeeItem.employeeName }</h5>
                                        </li>
                                        
                                        
                                        <li>
                                            <h4>Date Of Birth</h4>
                                            <h5>{EmployeeItem.dateOfBirth }</h5>
                                        </li>
                                        <li>
                                            <h4>Age</h4>
                                            <h5>{EmployeeItem.age }</h5>
                                        </li>
                                        <li>
                                            <h4>Gender</h4>
                     
                                            <Radio
            dataSrc={genderlist}
            onChange={(e) => this.handleOnChange(e)}
            selected={GenderItem}
          />
                                        </li>
                                        <li>
                                            <h4>Email</h4>
                                            <h5>{EmployeeItem.email }</h5>
                                        </li>
                                        <li>
                                            <h4>Phone Number</h4>
                                            <h5>{EmployeeItem.phoneNumber }</h5>
                                        </li>
                                        <li>
                                            <h4>Emergency Contact Number</h4>
                                            <h5>{EmployeeItem.emergencyContactNumber }</h5>
                                        </li>
                                        <li>
                                            <h4>Location</h4>
                                            <h5>{EmployeeItem.location }</h5>
                                        </li>
                                        <li>
                                            <h4>Marital Status</h4>
                                            <h5>{EmployeeItem.maritalStatus }</h5>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className='asset_detail_img_wrap'>
                                <img src={product_img} alt="product_img"/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='asset_detail_tab_right_card_wrap'>
                        <div className='asset_detail_tab_header_card_wrap'>
                            <h4>Additional Info</h4>
                        </div>
                        <div className='asset_detail_tab_header_body_wrap'>
                            <div className='asset_detail_tab_field_row_wrap'>
                                <div className='asset_detail_tab_fields_wrap'>
                                    <ul>
                                        {/* <li>
                                            <h4>Organisation ID</h4>
                                            <h5>{EmployeeItem.organisationID }</h5>
                                        </li>
                                        <li>
                                            <h4>Auto Number</h4>
                                            <h5>{EmployeeItem.autoNumber }</h5>
                                        </li> */}
                                        <li>
                                            <h4>Hire Date</h4>
                                            
                                            
                                            <DatePicker
           // visiblity={'hidden'}
           selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            name="Hire Date" />
                                            
                                           
                                        </li>
                                        
                                        <li>
                                            <h4>Manager Name</h4>
                                            <h5>{EmployeeItem.managerName }</h5>
                                        </li>
                                       
                                        <li>
                                            <h4>Department Name</h4>
                                            <h5>{EmployeeItem.departmentName}</h5>
                                        </li>
                                        <li>
                                            <h4>Designation Name</h4>
                                            <h5>{EmployeeItem.designationName}</h5>
                                        </li>
                                        <li>
                                            <h4>Blood Group ID</h4>
                                            <h5>{EmployeeItem.bloodGroupName}</h5>
                                        </li>
                                        {/* <li>
                                            <h4>Created By</h4>
                                            <h5>{EmployeeItem.createdBy}</h5>
                                        </li>
                                        <li>
                                            <h4>Modified By</h4>
                                            <h5>{EmployeeItem.modifiedBy}</h5>
                                        </li> */}
                                    </ul>
                                </div>
                                {/* <div className='asset_detail_img_wrap'>
                                    <img src={product_img} alt="product_img"/>
                                </div> */}
                            </div>
                        </div>
                    </div>       
                </div>
            </TabPane>
            <TabPane tabId="2">
                <div className='asset_document_section_outer_wrap'>
                    <div className='asset_table_outer_wrap'>
                        <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                            <h1>Experience</h1>
                        </div>
                        <div className='asset_table_inner_wrap'>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <td>Employee ID</td>
                                        <td>Company Name</td>
                                        <td>Designation</td>
                                        <td>Start Date</td>
                                        <td>End Date</td>
                                        <td>Years Worked</td>
                                        <td>Salary</td>
                                        <td>Created By</td>
                                        <td>Modified By</td>
                                    </tr>
                                </thead>

                                <tbody>

                                {AssetPartsList.map((assetPart, index) => (  
              <tr data-index={index}>  
               
            
               <td className='asset_id_col'>{assetPart.id}</td>
                <td>{assetPart.partName}</td>
                <td>2</td>

              </tr>  
            ))}   

                                
                                </tbody>
                            </Table>
                        </div>
                        <div className="pagination_outer_wrap">
                            <div className="select_per_page_outer_wrap">
                                <label>
                                    Rows per page:
                                </label>
                                <select >
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <p><span>1-10</span> of <span>13</span></p>
                            </div>
                            <div className="pagination_navigation_wrap">
                                <ul>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="nextback">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="next_back_arrow">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="3">
                <div className='asset_document_section_outer_wrap'>
                    <div className='asset_table_outer_wrap'>
                        <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                            <h1>Family Details</h1>
                        </div>
                        <div className='asset_table_inner_wrap'>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <td>Employee ID</td>
                                        <td>Name</td>
                                        <td>Relationship </td>
                                        <td>Age</td>
                                        <td>DOB</td>
                                        <td>Contact Number</td>
                                        <td>Created BY</td>
                                        <td>Modified BY</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="pagination_outer_wrap">
                            <div className="select_per_page_outer_wrap">
                                <label>
                                    Rows per page:
                                </label>
                                <select >
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <p><span>1-10</span> of <span>13</span></p>
                            </div>
                            <div className="pagination_navigation_wrap">
                                <ul>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="nextback">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="next_back_arrow">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="4">
                <div className='asset_document_section_outer_wrap'>
                    <div className='asset_table_outer_wrap'>
                        <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                            <h1>Qualification</h1>
                        </div>
                        <div className='asset_table_inner_wrap'>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <td>Employee ID</td>
                                        <td>Degree Name</td>
                                        <td>Institute Name </td>
                                        <td>University Name</td>
                                        <td>Year Of Passing</td>
                                        <td>Percentage</td>
                                        <td>Created BY</td>
                                        <td>Modified BY</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                    <tr>
                                        {/* <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="pagination_outer_wrap">
                            <div className="select_per_page_outer_wrap">
                                <label>
                                    Rows per page:
                                </label>
                                <select >
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <p><span>1-10</span> of <span>13</span></p>
                            </div>
                            <div className="pagination_navigation_wrap">
                                <ul>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="nextback">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="next_back_arrow">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            {/* <TabPane tabId="5">
                <div className={`asset_specification_outer_wrap ${tabactive ? "active" : "false"}`}>
                    <div className='asset_document_section_outer_wrap'>
                        <div className='asset_table_outer_wrap'>
                            <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                                <h1>Technical Specification</h1>
                            </div>
                            <div className='asset_table_inner_wrap'>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Technical ID</td>
                                            <td>Technical Name</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="pagination_outer_wrap">
                                <div className="select_per_page_outer_wrap">
                                    <label>
                                        Rows per page:
                                    </label>
                                    <select >
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                    <p><span>1-10</span> of <span>13</span></p>
                                </div>
                                <div className="pagination_navigation_wrap">
                                    <ul>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="nextback">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="next_back_arrow">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='asset_document_section_outer_wrap'>
                        <div className='asset_table_outer_wrap'>
                            <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                                <h1>Attributes</h1>
                            </div>
                            <div className='asset_table_inner_wrap'>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Attributes ID</td>
                                            <td>Attributes Name</td>
                                            <td>UOM ID</td>
                                            <td>Attribute text value</td>
                                            <td>Attribute numeric value</td>
                                            <td>Attribute date value</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="pagination_outer_wrap">
                                <div className="select_per_page_outer_wrap">
                                    <label>
                                        Rows per page:
                                    </label>
                                    <select >
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                    <p><span>1-10</span> of <span>13</span></p>
                                </div>
                                <div className="pagination_navigation_wrap">
                                    <ul>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="nextback">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="next_back_arrow">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane> */}
        </TabContent>
    </div>
  );
}