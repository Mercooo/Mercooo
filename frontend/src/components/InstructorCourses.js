import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import React from 'react';
import { EditOutlined, QuestionCircleOutlined , PercentageOutlined ,PlusCircleOutlined,UserOutlined   } from '@ant-design/icons';
import { Avatar, Card,Row,Col } from 'antd';
import { useEffect } from "react";
import Navbar from "../components/Navbarri"; 
const { Meta } = Card;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const { useState, Component } = require("react");

const CoursesInstructor = () => {
 const navigate=useNavigate();
  const {id} = useParams();
  const [courses, setCourses] = useState([]);
  const [trainee, setTrainee] = useState([]);

  // const getCourse = async (id) => {
  //   return async function () {
  //     await axios
  //       .get(`http://localhost:7007/indiviualtrainee/getCourse/${id}`)
  //       .then((res) => {
  //         const course = res.data;
  //         coursesTitles.push(course);
  //         console.log(course);
  //       });
  //   };
  // };
 

    // const onButtonClick1 = () => {
    //   navigate(`./MyCoursePage/${course._id}`)
    // }

  useEffect(() => {
  const getCourses = async (req, res) => {
    
    await axios
      .get(`http://localhost:7007/instructor/viewMyCourses/${id}`)
      .then((res) => {
        const courses = res.data;
        console.log(courses);
        setCourses(courses);
      });
  };
  getCourses()
    
  }, [])
  return (
    // visualize authors in a table map over authors
    <div>
      <Navbar/>
      <div className="inss1">
    <div className="site-card-wrapper">

<Row gutter={16}>
      
            {courses.map((course) => (
              <Col span={8}>
              <Card
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <a href={`/Discount/${id}?courseId=${course._id}`}><PercentageOutlined  key="promotion" title='Define Promotion' /></a>,
                <a href={`/instructor/createExam/${id}?courseId=${course._id}`}><EditOutlined key="exam" title='Create Exam' /></a>,
                <a href={`/ReportProbi/${id}?courseId=${course._id}`}><QuestionCircleOutlined  key="report" title='Report Course'/></a>,
                <a href={`/viewMyStudents/${id}?courseId=${course._id}`}><UserOutlined   key="MyStudends" title='MyStudents'/></a>,
                // <DownloadOutlined key="download" onClick={onButtonClick}/>
              ]}
              
            >
             
              <Meta
  //               title={"Rating: "+ course.rating.$numberDecimal}
  //               avatar={"Name: "+course.title}
  //               description={"Reviews: "+course.Review.map((i)=>{
  //                 return i+" , ";
  // })}
              
            
             
                key={course._id}
                />
              </Card>
               </Col>
            ))}
          
          </Row>
     
    </div>
    </div>
    </div>
  );
};
export default CoursesInstructor;