import aboutme from '../../assests/Aboutme.png'
import certificate from '../../assests/certificate.png'
import contact from '../../assests/contact.png'
import education from '../../assests/Education.png'
import home from '../../assests/Home.png'
import project from '../../assests/project.png'
import skills from '../../assests/Skills.png';
import linkedin from '../../assests/linkedin.png';
import twitter from '../../assests/twitter.png';
import github from '../../assests/github.png';
import mail from '../../assests/gmail.png';

import c from '../../assests/C.png'
import cplus from '../../assests/C++.png'
import html from '../../assests/html5.png'
import css from '../../assests/CSS3.png'
import js from '../../assests/JS.png'
import python from '../../assests/Python.png'
import sql from '../../assests/SQL.png';
import react from '../../assests/React.png';
import node from '../../assests/Nodejs.png';
import boostrap from '../../assests/bootstrap.png';
import redux from '../../assests/Redux.png';
import yarn from '../../assests/yarn.png'
import mysql from '../../assests/MySQL.png'
import postgresql from '../../assests/PostgreSQL.png'
import mongodb from '../../assests/MongoDb.png'
import npm from '../../assests/npm.png'
import postman from '../../assests/postman-icon.png';
import git from '../../assests/git.png';
import githubs from '../../assests/github.png';
import vscode from '../../assests/VScode.png';
import lambda from '../../assests/Lambda.png';
import dynamodb from '../../assests/DynamoDB.png'
import apigateway from '../../assests/API Gateway.png'
import iam from '../../assests/IAM Identity Center.png'
import amplify from '../../assests/Amplify.png'
import codecommit from '../../assests/CodeCommit.png';
import cognito from '../../assests/Cognito.png';
import s3 from '../../assests/Simple Storage Service.png';


export  let array=[
    {
        text: "About",
        imageSource: aboutme
    },
    {
        text: "Skills",
        imageSource: skills
    },
    {
        text: "Experience",
        imageSource: home
    },
    {
        text: "Projects",
        imageSource: project
    },
    {
        text: "Certificates",
        imageSource: certificate
    },
    {
        text: "Education",
        imageSource: education
    },
    {
        text: "Contact",
        imageSource: contact
    },
 ]

export let homeArray=[
    {
        imageSource: linkedin,
        socialLink: "https://www.linkedin.com/in/mehulgarg22/",
    },
    {
        imageSource: github,
        socialLink: "https://github.com/MehulGarg22",
    },
    {
        imageSource: twitter,
        socialLink: "https://twitter.com/MehulGarg22",
    },
    {
        imageSource: mail,
        socialLink: "mailto: mehul.garg104@gmail.com",
    },
]


export let skillsArray=[
    {
        heading:"Programming Language",
        programmingLanguage:[
            {
                imageAlt:"C",
                image: c
            },
            {
                imageAlt:"Cplus",
                image: cplus
            },
            {
                imageAlt:"html",
                image: html
            },
            {
                imageAlt:"css",
                image: css
            },
            {
                imageAlt:"js",
                image: js
            },
            {
                imageAlt:"python",
                image: python
            },
            {
                imageAlt:"sql",
                image: sql
            }
        ]
    },
    {
        heading:"Framework",
        programmingLanguage:[
            {
                imageAlt:"react",
                image: react
            },
            {
                imageAlt:"redux",
                image: redux
            },
            {
                imageAlt:"boostrap",
                image: boostrap
            },
            {
                imageAlt:"yarn",
                image: yarn
            },
            {
                imageAlt:"node",
                image: node
            }
        ]
    },
    {
        heading:"Database",
        programmingLanguage:[
            {
                imageAlt:"MySQL",
                image: mysql
            },
            {
                imageAlt:"postgresql",
                image: postgresql
            },
            {
                imageAlt:"mongodb",
                image: mongodb
            }
        ]
    },
    {
        heading:"Developer Tools",
        programmingLanguage:[
            {
                imageAlt:"npm",
                image: npm
            },
            {
                imageAlt:"postman",
                image: postman
            },
            {
                imageAlt:"git",
                image: git
            },
            {
                imageAlt:"github",
                image: github
            },
            {
                imageAlt:"vscode",
                image: vscode
            }
        ]
    },
    {
        heading:"AWS Services",
        programmingLanguage:[
            {
                imageAlt:"Lambda",
                image: lambda
            },
            {
                imageAlt:"Dynamodb",
                image: dynamodb
            },
            {
                imageAlt:"apigateway",
                image: apigateway
            },
            {
                imageAlt:"iam",
                image: iam
            },
            {
                imageAlt:"amplify",
                image: amplify
            },
            {
                imageAlt:"codecommit",
                image: codecommit
            },
            {
                imageAlt:"cognito",
                image: cognito
            },
            {
                imageAlt:"s3",
                image: s3
            }
        ]
    }
]