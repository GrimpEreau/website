import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SupportCommercial from '../images/support_commercial.svg';
import SupportCommunity from '../images/support_community.svg';

const CommunityCard = ({ children, image, title }) => (
  <div className="community-card">
    <img className="community-card__image" src={image} alt={title} width="100" height="100" />
    <h3>{title}</h3>
    <div className="community-card__content">{children}</div>
  </div>
);

CommunityCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

CommunityCard.defaultProps = {
  children: null,
};

const CommunityPage = props => (
  <Layout location={props.location}>
    <div className="community">
      <Helmet title="Community" />
      <section className="container">
        <h1>
          If you're interested in contributing to API Platform and supporting our community then you're in the good
          place! There are many ways to get involved and help us.
        </h1>
        <div className="community__cards">
          <CommunityCard image={SupportCommercial} title="Contribute to the framework">
            <p>
              <strong>Improving the documentation</strong> is an excellent way to start getting involved with API
              Platform.
            </p>
            <br />
            <p>
              You can also{' '}
              <a href="https://github.com/api-platform/api-platform/issues" target="_blank" rel="noopener noreferrer">
                report issues
              </a>
              , help fix bugs or implement new features via <strong>creating a Pull Request</strong>.
            </p>
          </CommunityCard>
          <CommunityCard title="Commercial support" image={SupportCommercial}>
            <p>
              <a href="https://les-tilleuls.coop/en" target="_blank" rel="noopener noreferrer">
                Les-Tilleuls.coop
              </a>{' '}
              provides professional services for API Platform and Symfony including training, development and API
              design.
            </p>
            <br />
            <p>
              <a href="https://les-tilleuls.coop/en/contact" target="_blank" rel="noopener noreferrer">
                Contact us
              </a>{' '}
              for more information.
            </p>
          </CommunityCard>
          <CommunityCard title="Community support" image={SupportCommunity}>
            <p>
              Ask questions about API Platform on{' '}
              <a
                href="https://stackoverflow.com/questions/tagged/api-platform.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stack Overflow
              </a>{' '}
              using the api-platform.com tag.
            </p>
            <br />
            <p>
              Chat with the community on the{' '}
              <a href="https://symfony.com/slack" target="_blank" rel="noopener noreferrer">
                api-platform channel on Symfony&#39;s Slack
              </a>
              .
            </p>
          </CommunityCard>
          <CommunityCard image={SupportCommercial} title="Help your local community">
            <p>Help us by connecting with your local community. Here is a few actions you can undertake :</p>
            <br />
            <p>
              Spread the word with{' '}
              <a href="https://twitter.com/search?q=apiplatform&src=typd" target="_blank" rel="noopener noreferrer">
                social media
              </a>{' '}
              or organise a meetup (discover the upcoming conferences).
            </p>
          </CommunityCard>
        </div>
      </section>
    </div>
  </Layout>
);
CommunityPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CommunityPage;
