import React from "react";
import dateFormat from "dateformat";

const Dishcomment= props=>{
    return(
       props.comment.map(comment =>{
            return(
              <div>
                <div className="comments" key={comment.id}>
                  <div className="author">{comment.author}</div>                  
                  <div className="comment">{comment.comment}</div>
                  <div className="rating">{comment.rating} *</div>
                  <div className="date">{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>                  
                </div>
              </div>
            )
        })
    )
}
export default Dishcomment;