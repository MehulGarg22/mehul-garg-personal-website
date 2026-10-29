import { ArrowUpRight } from 'lucide-react';

const external = { target: '_blank', rel: 'noopener noreferrer' };

const services = [
  ['Amazon Cognito', 'Identity & sessions', 'User sign-in with JWT sessions, React Context, route guards, and expiry-based logout.'],
  ['API Gateway', 'Application APIs', 'REST endpoints connecting the React interface to backend operations.'],
  ['AWS Lambda', '13 focused functions', 'Separate handlers for blogs, cards, profile images, and signup notifications.'],
  ['Amazon DynamoDB', '3 data domains', 'Blog posts, credit-card records, and profile metadata with access patterns tailored to each flow.'],
  ['Amazon S3', 'Direct image uploads', 'Five-minute presigned upload URLs let the browser send profile images directly to S3.'],
  ['Step Functions', 'Signup orchestration', 'A Cognito Post Confirmation handler starts the signup notification workflow.'],
  ['Amazon SNS', 'Admin notifications', 'A notification handler publishes new-signup details for administrator review.'],
  ['AWS IAM', 'Service permissions', 'Lambda execution roles grant backend functions access to the AWS resources they use.'],
  ['Amazon CloudWatch', 'Runtime visibility', 'Lambda logs capture requests, execution details, and errors for troubleshooting.'],
  ['Amazon CloudFront', 'Content delivery', 'Distributes the web app and uploaded profile images through a content delivery network.'],
];

const modules = [
  ['05', 'Blogging', 'Personal blog CRUD and a community feed, with search and pagination in the interface.'],
  ['03', 'Card management', 'Create, update, fetch, and delete card records for comparison across nine reward platforms.'],
  ['03', 'Profile images', 'Generate a presigned URL, upload to S3, and save or retrieve the image path in DynamoDB.'],
  ['02', 'Signup notifications', 'Start a Step Functions execution from Cognito and publish the administrator notification through SNS.'],
];

export default function CloudXCaseStudy() {
  return (
    <div className="case-study" aria-label="CloudX Suite case study">
      <div className="case-intro">
        <div>
          <span className="case-kicker">FLAGSHIP PERSONAL PROJECT / CLOUDX SUITE</span>
          <h3>Built end to end.<br /><span>Connected across the cloud.</span></h3>
        </div>
        <p>I built CloudX Suite to put full-stack engineering into practice: a React application for credit-card rewards comparison and community blogging, backed by identity, APIs, data storage, file uploads, and event-driven notifications.</p>
      </div>

      <dl className="cloudx-facts">
        <div><dt>{String(services.length).padStart(2, '0')}</dt><dd>AWS services integrated</dd></div>
        <div><dt>13</dt><dd>Lambda functions</dd></div>
        <div><dt>03</dt><dd>DynamoDB data domains</dd></div>
        <div><dt>09</dt><dd>Reward platforms compared</dd></div>
      </dl>

      <div className="cloudx-section-heading">
        <span className="case-kicker">THE AWS ARCHITECTURE</span>
        <h4>Ten AWS services. One connected product.</h4>
      </div>
      <div className="cloudx-services">
        {services.map(([name, purpose, description]) => (
          <article key={name}>
            <span>{purpose}</span>
            <h5>{name}</h5>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <div className="case-architecture cloudx-flows">
        <div><span className="case-kicker">CONNECTED WORKFLOWS</span><h4>From interaction to execution</h4></div>
        <div className="cloudx-flow-list">
          <div><h5>Application data</h5><p>React <b>→</b> API Gateway <b>→</b> Lambda <b>→</b> DynamoDB</p></div>
          <div><h5>Profile image</h5><p>Presigned URL <b>→</b> browser uploads to S3 <b>→</b> path saved in DynamoDB</p></div>
          <div><h5>Signup notification</h5><p>Cognito Post Confirmation <b>→</b> Lambda <b>→</b> Step Functions <b>→</b> SNS handler</p></div>
          <div><h5>Delivery & operations</h5><p>CloudFront delivers the web app and images; IAM defines service permissions; CloudWatch captures Lambda logs.</p></div>
        </div>
      </div>

      <div className="cloudx-section-heading">
        <span className="case-kicker">13 FUNCTIONS / FOUR APPLICATION DOMAINS</span>
        <h4>More than a list of services.</h4>
      </div>
      <div className="cloudx-modules">
        {modules.map(([count, name, description]) => (
          <article key={name}><span>{count} <small>FUNCTIONS</small></span><h5>{name}</h5><p>{description}</p></article>
        ))}
      </div>

      <div className="cloudx-engineering">
        <span className="case-kicker">ENGINEERING DETAILS</span>
        <ul>
          <li><strong>Data access:</strong> personal blogs use email-based queries and composite keys; card fetching follows DynamoDB pagination tokens.</li>
          <li><strong>Backend validation:</strong> blog handlers validate fields and normalize email addresses; conditional writes protect against accidental overwrites.</li>
          <li><strong>User experience:</strong> administrator, user, and guest interfaces, sortable comparisons, dynamic forms, and personal and community feeds.</li>
          <li><strong>Delivery & operations:</strong> AWS SAM configuration, deployment scripts, IAM execution roles, CloudWatch logs, and CloudFront delivery for the web app and images.</li>
        </ul>
      </div>

      <div className="case-learning">
        <span className="case-kicker">WHAT I LEARNED BY BUILDING</span>
        <p>How to model data around access patterns, coordinate asynchronous authentication and session state, connect direct file uploads with persistent metadata, and separate signup notifications from the main application flow. CloudX brought these decisions together in one working product.</p>
        <div className="case-links">
          <a href="https://cloudxsuite.netlify.app" {...external}>Explore CloudX Suite <ArrowUpRight size={16} /></a>
          <a href="https://github.com/MehulGarg22/CloudX-Suite" {...external}>View frontend code <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </div>
  );
}
