import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h1 className="hero__title">{_.get(section, 'title', null)}</h1>
                )}
                {_.get(section, 'content', null) && (
                <iframe width="100%" height="400" src="https://time.graphics/ru/embed?v=1&id=508715" frameborder="0" allowfullscreen></iframe>
                <div><a  style="font-size: 12px; text-decoration: none;" title="Milestone chart" href="https://time.graphics">Milestone chart</a></div>
    
                )}
                {_.get(section, 'actions', null) && (
                <div className="hero__actions button-group">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}
              </div>
            </section>
        );
    }
}
