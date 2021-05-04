import React, { Component } from 'react'
import Card from './Card'

export default class Skills extends Component {
    render() {
        return (
          <section className="skills">
                <h1 className="title">
                    Skills
                </h1>
                <h2 className="titles">Frontend</h2>
                <div className="flexWrap">
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F500%2F1*cPh7ujRIfcHAy4kW2ADGOw.png&f=1&nofb=1" name="Reactjs"/>
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffossbytes.com%2Fwp-content%2Fuploads%2F2017%2F01%2FJavascript.png&f=1&nofb=1" name="javascript" />
                    <Card src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcly7796.net%2Fwp%2Fwp-content%2Fuploads%2F2015%2F05%2Fscss.jpg&f=1&nofb=1" name="s(css)" />
                    <Card src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.webdevelopmenthelp.net%2Fwp-content%2Fuploads%2F2015%2F09%2FHTML55.png&f=1&nofb=1" name="HTML5" />
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ittrainingnepal.com%2Fpublic%2Fcourses%2F19041291016JSP-course.jpg&f=1&nofb=1" name="JSp"/>
                </div>
                <h2 className="titles">Backend</h2>
                <div className="flexWrap">
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.leiue.com%2Fuploads%2F2019%2F03%2FNode.js.png!760&f=1&nofb=1" name="Nodejs"/>
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Flogo-php-png%2Fphp-server-integration-wysiwyg-html-editor-froala-10.png&f=1&nofb=1" name="PHP" />
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebforpc.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fjava-logo.png&f=1&nofb=1" name="JAVA" />
                </div>
                <h2 className="titles">Databases</h2>
                <div className="flexWrap">
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.g2crowd.com%2Fuploads%2Fproduct%2Fimage%2Fsocial_landscape%2Fsocial_landscape_1489695931%2Fpostgresql.png&f=1&nofb=1" name="postgress"/>
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.pcmag.com%2Fmedia%2Fimages%2F506844-mongodb-atlas-logo.jpg%3Fwidth%3D810%26height%3D456&f=1&nofb=1" name="MongoDB/mongoose" />
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-YIfQT6q8ZM4%2FVzyq5z1B8HI%2FAAAAAAAAAAc%2FUmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB%2Fs1600%2Fimage00.png&f=1&nofb=1" name="Firebase" />
                    <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscibit.com%2Fwp-content%2Fuploads%2Fsites%2F29%2F2016%2F12%2Fmysql.jpg&f=1&nofb=1" name="Mysql" />
                </div>
          </section>
        )
    }
}
