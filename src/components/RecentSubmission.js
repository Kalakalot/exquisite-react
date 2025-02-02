import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      {/* Most recent submission comes from Game via addLine, which holds the line of poetry from User Submission Form */}
      <p className="RecentSubmission__submission">{ props.recentSubmission  }</p>
    </div>
  );
}

export default RecentSubmission;
