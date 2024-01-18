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
import awscloudpractitioner from '../../assests/AWS Certified Cloud Practitioner.png';
import googleTech from '../../assests/GoogleTech.png';
import internshala from '../../assests/Internshala.png'

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
                descirption: "C Programming Language",
                image: c
            },
            {
                imageAlt:"Cplus",
                descirption: "C++",
                image: cplus
            },
            {
                imageAlt:"html",
                descirption: "HTML5",
                image: html
            },
            {
                imageAlt:"css",
                descirption: "CSS3",
                image: css
            },
            {
                imageAlt:"js",
                descirption: "Javascript",
                image: js
            },
            {
                imageAlt:"python",
                descirption: "Python",
                image: python
            },
            {
                imageAlt:"sql",
                descirption: "SQL",
                image: sql
            }
        ]
    },
    {
        heading:"Framework",
        programmingLanguage:[
            {
                imageAlt:"react",
                descirption: "React Js",
                image: react
            },
            {
                imageAlt:"redux",
                descirption: "Redux",
                image: redux
            },
            {
                imageAlt:"boostrap",
                descirption: "Boostrap",
                image: boostrap
            },
            {
                imageAlt:"yarn",
                descirption: "Yarn",
                image: yarn
            },
            {
                imageAlt:"node",
                descirption: "Node Js",
                image: node
            }
        ]
    },
    {
        heading:"Database",
        programmingLanguage:[
            {
                imageAlt:"MySQL",
                descirption: "MySQL",
                image: mysql
            },
            {
                imageAlt:"postgresql",
                descirption: "PostgreSQL",
                image: postgresql
            },
            {
                imageAlt:"mongodb",
                descirption: "MongoDb",
                image: mongodb
            }
        ]
    },
    {
        heading:"Developer Tools",
        programmingLanguage:[
            {
                imageAlt:"npm",
                descirption: "NPM",
                image: npm
            },
            {
                imageAlt:"postman",
                descirption: "Postman",
                image: postman
            },
            {
                imageAlt:"git",
                descirption: "Git",
                image: git
            },
            {
                imageAlt:"github",
                descirption: "Github",
                image: github
            },
            {
                imageAlt:"vscode",
                descirption: "VS Code",
                image: vscode
            }
        ]
    },
    {
        heading:"AWS Services",
        programmingLanguage:[
            {
                imageAlt:"Lambda",
                descirption: "AWS Lambda",
                image: lambda
            },
            {
                imageAlt:"Dynamodb",
                descirption: "AWS DynamoDB",
                image: dynamodb
            },
            {
                imageAlt:"apigateway",
                descirption: "AWS API Gateway",
                image: apigateway
            },
            {
                imageAlt:"iam",
                descirption: "AWS Identity Access Management",
                image: iam
            },
            {
                imageAlt:"amplify",
                descirption: "AWS Amplify",
                image: amplify
            },
            {
                imageAlt:"codecommit",
                descirption: "AWS CodeCommit",
                image: codecommit
            },
            {
                imageAlt:"cognito",
                descirption: "AWS Cognito",
                image: cognito
            },
            {
                imageAlt:"s3",
                descirption: "AWS S3",
                image: s3
            }
        ]
    }
]

export let certificateArray=[
    {
        imageSource: awscloudpractitioner,
        imageAlt: "AWS Certified Cloud Practitioner",
        imageLink:"https://drive.google.com/file/d/1uPXEFiPTCyzvi_Nv0mSbWbwF5Voh7Od2/view?usp=sharing"
    },
    {
        imageSource: googleTech,
        imageAlt: "GoogleTech",
        imageLink:"https://drive.google.com/file/d/1eXfdL7nhd-boXJ3k5tZ8B0G-KmNBb5ak/view?usp=sharing"
    },
    {
        imageSource: internshala,
        imageAlt: "Internshala",
        imageLink:"https://drive.google.com/file/d/1s5zxSOdamFeLKHR4lDds5vxsN2cNURV4/view?usp=sharing"
    },
]