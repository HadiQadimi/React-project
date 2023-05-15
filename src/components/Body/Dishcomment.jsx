import React from "react";
import { Table } from "react-bootstrap";
import dateFormat from "dateformat";
import {now} from "react-bootstrap";
const Dishcomment= props=>{
    return(
       props.comment.map(comment =>{
            return(
                <div>
                 <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>comment</th>
          <th>auther</th>
          <th>date</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{comment.id}</td>
          <td>{comment.comment}</td>
          <td>{comment.author}</td>
          <td>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
          <td>{comment.rating}</td>
        </tr>
        </tbody>
        </Table>
                </div>
            )
        })
    )
}
export default Dishcomment;