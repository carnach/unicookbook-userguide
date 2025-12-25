import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'UniCookbook User Manual',
    Svg: require('@site/static/img/unicookbook.svg').default,
    description: (
      <>
        Learn how to use UniCookbook end-to-end: adding recipes, filtering, approvals, sharing, backups, and more.
        <br />
        <Link to="/docs/user-guide">Read the User Guide →</Link>
      </>
    ),
  },
  {
    title: 'Recipe Approval Workflow',
    Svg: require('@site/static/img/approvals-app.svg').default,
    description: (
      <>
        Understand untested recipes, 2-person approvals, and visibility rules for authorized vs guest users.
        <br />
        <Link to="/docs/user-guide#recipe-approval-system">Approval System →</Link>
      </>
    ),
  },
  {
    title: 'Filtering, Search & Tags',
    Svg: require('@site/static/img/filter-search.svg').default,
    description: (
      <>
        Use AND-based multi-tag filters, contributor filters, and full-text search to find recipes fast.
        <br />
        <Link to="/docs/user-guide#filtering--search">Filtering & Search →</Link>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
