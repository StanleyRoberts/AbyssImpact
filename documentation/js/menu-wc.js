'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">abyss-impact documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2f1a36c791c74d87d7e607edfb6f7e6cf3117afc87e37b7fbc601cdc8dd91c1d5b69487c75288712ae039ad198b58b4b8db0501e5d7a5514508bd96efa57898e"' : 'data-target="#xs-components-links-module-AppModule-2f1a36c791c74d87d7e607edfb6f7e6cf3117afc87e37b7fbc601cdc8dd91c1d5b69487c75288712ae039ad198b58b4b8db0501e5d7a5514508bd96efa57898e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2f1a36c791c74d87d7e607edfb6f7e6cf3117afc87e37b7fbc601cdc8dd91c1d5b69487c75288712ae039ad198b58b4b8db0501e5d7a5514508bd96efa57898e"' :
                                            'id="xs-components-links-module-AppModule-2f1a36c791c74d87d7e607edfb6f7e6cf3117afc87e37b7fbc601cdc8dd91c1d5b69487c75288712ae039ad198b58b4b8db0501e5d7a5514508bd96efa57898e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CharactersModule.html" data-type="entity-link" >CharactersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CharactersModule-0b2dc96fd6f11a20e66917eca559365e9b55e51545144082d36388c2e1b095b92ba654153bda3638d168c12c352d3ecfaa85176382b9eae6016a5630be8627d8"' : 'data-target="#xs-components-links-module-CharactersModule-0b2dc96fd6f11a20e66917eca559365e9b55e51545144082d36388c2e1b095b92ba654153bda3638d168c12c352d3ecfaa85176382b9eae6016a5630be8627d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CharactersModule-0b2dc96fd6f11a20e66917eca559365e9b55e51545144082d36388c2e1b095b92ba654153bda3638d168c12c352d3ecfaa85176382b9eae6016a5630be8627d8"' :
                                            'id="xs-components-links-module-CharactersModule-0b2dc96fd6f11a20e66917eca559365e9b55e51545144082d36388c2e1b095b92ba654153bda3638d168c12c352d3ecfaa85176382b9eae6016a5630be8627d8"' }>
                                            <li class="link">
                                                <a href="components/CharacterCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CharacterCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CharactersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CharactersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeamsModule.html" data-type="entity-link" >TeamsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TeamsModule-2f085e551349d139703495dfb39eef4ee29814592c78edbbcc71bdade076464ec7ac7c79dd1dd83c14192f16d985d30ff5c72bef513872f1d2c6691238419be6"' : 'data-target="#xs-components-links-module-TeamsModule-2f085e551349d139703495dfb39eef4ee29814592c78edbbcc71bdade076464ec7ac7c79dd1dd83c14192f16d985d30ff5c72bef513872f1d2c6691238419be6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TeamsModule-2f085e551349d139703495dfb39eef4ee29814592c78edbbcc71bdade076464ec7ac7c79dd1dd83c14192f16d985d30ff5c72bef513872f1d2c6691238419be6"' :
                                            'id="xs-components-links-module-TeamsModule-2f085e551349d139703495dfb39eef4ee29814592c78edbbcc71bdade076464ec7ac7c79dd1dd83c14192f16d985d30ff5c72bef513872f1d2c6691238419be6"' }>
                                            <li class="link">
                                                <a href="components/ArtiBuildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArtiBuildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuildCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuildCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Artifact.html" data-type="entity-link" >Artifact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BuildMap.html" data-type="entity-link" >BuildMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Char.html" data-type="entity-link" >Char</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/rolePair.html" data-type="entity-link" >rolePair</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Team.html" data-type="entity-link" >Team</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Weapon.html" data-type="entity-link" >Weapon</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});