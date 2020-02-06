import React, {Component, Fragment, useState} from 'react';
import {Button, Image, Container, Row, Col, Form} from 'react-bootstrap';


const FileUpload = () => {

  return (
  	<Fragment>
      <form>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile"/>
          <label className="custom-file-label" htmlFor="customFile">Choose file</label>
          <Button variant='primary' id="customFile" type="file"> Choose File</Button>
        </div>
      </form>
      <h1>Hello World 12das!</h1>
    </Fragment>

  );
};

export default FileUpload;



