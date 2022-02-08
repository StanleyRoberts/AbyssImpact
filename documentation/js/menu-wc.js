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
                                <a href="modules/AbyssteamsModule.html" data-type="entity-link" >AbyssteamsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AbyssteamsModule-77d6c858de85b72f1bfe2f1db8c406e4ac98ffb524738522d1573c58cdd8b2331da6b298958731be096c27fba1e6a8814afad92414518efbdffef81c602184cd"' : 'data-target="#xs-components-links-module-AbyssteamsModule-77d6c858de85b72f1bfe2f1db8c406e4ac98ffb524738522d1573c58cdd8b2331da6b298958731be096c27fba1e6a8814afad92414518efbdffef81c602184cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AbyssteamsModule-77d6c858de85b72f1bfe2f1db8c406e4ac98ffb524738522d1573c58cdd8b2331da6b298958731be096c27fba1e6a8814afad92414518efbdffef81c602184cd"' :
                                            'id="xs-components-links-module-AbyssteamsModule-77d6c858de85b72f1bfe2f1db8c406e4ac98ffb524738522d1573c58cdd8b2331da6b298958731be096c27fba1e6a8814afad92414518efbdffef81c602184cd"' }>
                                            <li class="link">
                                                <a href="components/AbyssteamsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbyssteamsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b148a72d23131773ca5b19281e27f12e1a9c6afe6e83a2bebfaeca06b278b3e81a67e4a17301058097552846b28c8ad1eb739d34db90026a01ee68df8f7e34df"' : 'data-target="#xs-components-links-module-AppModule-b148a72d23131773ca5b19281e27f12e1a9c6afe6e83a2bebfaeca06b278b3e81a67e4a17301058097552846b28c8ad1eb739d34db90026a01ee68df8f7e34df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b148a72d23131773ca5b19281e27f12e1a9c6afe6e83a2bebfaeca06b278b3e81a67e4a17301058097552846b28c8ad1eb739d34db90026a01ee68df8f7e34df"' :
                                            'id="xs-components-links-module-AppModule-b148a72d23131773ca5b19281e27f12e1a9c6afe6e83a2bebfaeca06b278b3e81a67e4a17301058097552846b28c8ad1eb739d34db90026a01ee68df8f7e34df"' }>
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
                                            'data-target="#components-links-module-CharactersModule-a4a2d3b1a76bce60d6be64e74a8f340e2000da7d93273f4640a39f22292a749f6b3799e17a10e32c5e3e8bee25542fab56288d2a8c80226195a655e8787b291e"' : 'data-target="#xs-components-links-module-CharactersModule-a4a2d3b1a76bce60d6be64e74a8f340e2000da7d93273f4640a39f22292a749f6b3799e17a10e32c5e3e8bee25542fab56288d2a8c80226195a655e8787b291e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CharactersModule-a4a2d3b1a76bce60d6be64e74a8f340e2000da7d93273f4640a39f22292a749f6b3799e17a10e32c5e3e8bee25542fab56288d2a8c80226195a655e8787b291e"' :
                                            'id="xs-components-links-module-CharactersModule-a4a2d3b1a76bce60d6be64e74a8f340e2000da7d93273f4640a39f22292a749f6b3799e17a10e32c5e3e8bee25542fab56288d2a8c80226195a655e8787b291e"' }>
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
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AbyssteamsService.html" data-type="entity-link" >AbyssteamsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArtiBuildService.html" data-type="entity-link" >ArtiBuildService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CharacterCardService.html" data-type="entity-link" >CharacterCardService</a>
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
                                <a href="interfaces/teamString.html" data-type="entity-link" >teamString</a>
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