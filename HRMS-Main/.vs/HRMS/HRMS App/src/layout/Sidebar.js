import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './style.css';
import { Link } from 'react-router-dom';
import location_icon from '../assets/images/sidebar/Location_ico.png';
import Asset_ico from '../assets/images/sidebar/Asset_ico.png';
import AssetExplore_ico from '../assets/images/sidebar/AssetExplore_ico.png';
import serviceRQ_ico from '../assets/images/sidebar/serviceRQ_ico.png';
import Workorder_ico from '../assets/images/sidebar/Workorder_ico.png';
import PMshedule_ico from '../assets/images/sidebar/PMshedule_ico.png';
import Routes_ico from '../assets/images/sidebar/Routes_ico.png';
import InventoryParts_ico from '../assets/images/sidebar/InventoryParts_ico.png';
import PartsInventory_ico from '../assets/images/sidebar/PartsInventory_ico.png';
import Stockroom_ico from '../assets/images/sidebar/Stockroom_ico.png';
import InventoryTransaction_ico from '../assets/images/sidebar/InventoryTransaction_ico.png';
import RecevingParts_ico from '../assets/images/sidebar/RecevingParts_ico.png';
import InventoryPh_ico from '../assets/images/sidebar/InventoryPh_ico.png';
import AdjustmetParts_ico from '../assets/images/sidebar/AdjustmetParts_ico.png';
import MeterialRQ_ico from '../assets/images/sidebar/MeterialRQ_ico.png';
import { useNavigate } from "react-router-dom";
import Employee_icon from '../assets/images/sidebar/Employee_icon.png';
import Leave_icon from '../assets/images/sidebar/Leave_icon.png';
import Department_icon from '../assets/images/sidebar/Department_icon.png';
import Designation1_icon from '../assets/images/sidebar/Designation_icon.png';
import Blood_icon from '../assets/images/sidebar/Blood_icon.png';
import Relationship_icon from '../assets/images/sidebar/Relationship_icon.png';
import Claim_icon from '../assets/images/sidebar/Claim_icon.png';
import Appraisal__icon from '../assets/images/sidebar/Appraisal__icon.png';

function SidebarComponent() {
  
const navigate = useNavigate();
const refreshPage = () => {
  navigate(0);
}
  const getMasterPageLink = (navURL) => {
    refreshPage();
    return navURL;
  } 
    return (
      <>
        <Sidebar collapsedWidth="0px" width="230px">
          <Menu>
          <SubMenu label="Masters">
              <MenuItem icon={<img src={Employee_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assetCategory")} />}>Employee Type</MenuItem>
              <MenuItem icon={<img src={location_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assetsCriticality")} />}>Address Type</MenuItem>
              <MenuItem icon={<img src={Leave_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assetsPriority")} />}>Leave Type</MenuItem>
              <MenuItem icon={<img src={Department_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assetsStatus")} />}>Department</MenuItem>
              <MenuItem icon={<img src={Designation1_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assetsType")} />}>Designation</MenuItem>
              <MenuItem icon={<img src={Blood_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assetsWarranty")} />}>Blood Group</MenuItem>
              <MenuItem icon={<img src={location_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=locationType")} />}>Location</MenuItem>
              <MenuItem icon={<img src={Relationship_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=location")} />}>Relationship</MenuItem>
              <MenuItem icon={<img src={Claim_icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assetsLocation")} />}>Claim Type</MenuItem>
              <MenuItem icon={<img src={Appraisal__icon} alt="awSnap" />} routerLink={<Link to={getMasterPageLink("/masters?masterName=assets")} />}>Appraisal Objectives</MenuItem>
            </SubMenu>
            <SubMenu label="Dashboard">
              <MenuItem routerLink={<Link to="/" />}> Employee Details </MenuItem>
              <MenuItem routerLink={<Link to="/" />}> Employee Family </MenuItem>
              <MenuItem routerLink={<Link to="/" />}> Experience </MenuItem>
              <MenuItem routerLink={<Link to="/" />}> Qualification </MenuItem>
            </SubMenu>
            <SubMenu label="Assets">
              <MenuItem icon={<img src={location_icon} alt="awSnap" />} routerLink={<Link to="/" />}>
                 Location
              </MenuItem>
              <MenuItem active={window.location.pathname === "/assets"} icon={<img src={Asset_ico} alt="awSnap" />} routerLink={<Link to="/assets" />}> Asset </MenuItem>
              <MenuItem icon={<img src={AssetExplore_ico} alt="awSnap" />} routerLink={<Link to="/assets_detail" />}> Asset Explorer</MenuItem>
            </SubMenu>
            <SubMenu label="Work Management">
              <MenuItem icon={<img src={serviceRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Service Request</MenuItem>
              <MenuItem icon={<img src={Workorder_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Work Orders </MenuItem>
              <MenuItem icon={<img src={PMshedule_ico} alt="awSnap" />} routerLink={<Link to="/" />}> PM Schedules</MenuItem>
              <MenuItem icon={<img src={Routes_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Routes</MenuItem>
            </SubMenu>
            <SubMenu label="Inventory">
              <MenuItem icon={<img src={InventoryParts_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Parts</MenuItem>
              <MenuItem icon={<img src={PartsInventory_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Parts Inventory</MenuItem>
              <MenuItem icon={<img src={Stockroom_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Stockrooms</MenuItem>
              <MenuItem icon={<img src={InventoryTransaction_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Inventory Transactions</MenuItem>
              <SubMenu label="Receiving">
                <MenuItem icon={<img src={RecevingParts_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Parts</MenuItem>
              </SubMenu>
              <SubMenu label="Adjustment">
                <MenuItem icon={<img src={AdjustmetParts_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Parts</MenuItem>
              </SubMenu>
              <MenuItem icon={<img src={InventoryPh_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Inventory Physical Count</MenuItem>
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}>Material Requisition</MenuItem>
            </SubMenu>
            <SubMenu label="Reports">
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Service Request</MenuItem>
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Work Orders </MenuItem>
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> PM Schedules</MenuItem>
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Routes</MenuItem>
            </SubMenu>
            <SubMenu label="Settings">
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Service Request</MenuItem>
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Work Orders </MenuItem>
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> PM Schedules</MenuItem>
              <MenuItem icon={<img src={MeterialRQ_ico} alt="awSnap" />} routerLink={<Link to="/" />}> Routes</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </>
     )
 }

export default SidebarComponent;