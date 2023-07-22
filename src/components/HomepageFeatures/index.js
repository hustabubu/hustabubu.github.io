import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '笔记',
    Svg: require('@site/static/img/undraw_javascript_frameworks_-8-qpc.svg').default,
    description: (
      <>
        记录编程小白学习编程的的笔记和坑。
      </>
    ),
  },
  {
    title: '博客',
    Svg: require('@site/static/img/undraw_departing_re_mlq3.svg').default,
    description: (
      <>
        记录点点滴滴。
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    title: '休闲',
    Svg: require('@site/static/img/undraw_compose_music_re_wpiw .svg').default,
    description: (
      <>
        休闲空间。
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
        <h3>{title}</h3>
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
