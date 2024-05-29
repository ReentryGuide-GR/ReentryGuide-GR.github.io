import React from 'react';
import Layout from '@theme/Layout';
import PrivacyPolicy from './privacy-policy.md';

export default function PrivacyPolicyPage() {
  return (
    <Layout title="Privacy Policy">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="markdown">
              <PrivacyPolicy />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
