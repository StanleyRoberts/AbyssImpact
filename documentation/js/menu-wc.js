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
                                            'data-target="#components-links-module-CharactersModule-6fb6aba371b33a09c263a09962c046b18d833e9dd45e1f5fed743db916338e2c0100b15675739e3429e662a96a36811b726d61f65615b12a946b9ea1794aaa88"' : 'data-target="#xs-components-links-module-CharactersModule-6fb6aba371b33a09c263a09962c046b18d833e9dd45e1f5fed743db916338e2c0100b15675739e3429e662a96a36811b726d61f65615b12a946b9ea1794aaa88"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CharactersModule-6fb6aba371b33a09c263a09962c046b18d833e9dd45e1f5fed743db916338e2c0100b15675739e3429e662a96a36811b726d61f65615b12a946b9ea1794aaa88"' :
                                            'id="xs-components-links-module-CharactersModule-6fb6aba371b33a09c263a09962c046b18d833e9dd45e1f5fed743db916338e2c0100b15675739e3429e662a96a36811b726d61f65615b12a946b9ea1794aaa88"' }>
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
                                            'data-target="#components-links-module-TeamsModule-cb4bd4934f3af36e812acdd96994c57bb949180318e7b8926b38790c327f9dde4106686dabe1b9ed6ac04ed9be06c6111318f7e93293afd06dfa32a4f1f7853f"' : 'data-target="#xs-components-links-module-TeamsModule-cb4bd4934f3af36e812acdd96994c57bb949180318e7b8926b38790c327f9dde4106686dabe1b9ed6ac04ed9be06c6111318f7e93293afd06dfa32a4f1f7853f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TeamsModule-cb4bd4934f3af36e812acdd96994c57bb949180318e7b8926b38790c327f9dde4106686dabe1b9ed6ac04ed9be06c6111318f7e93293afd06dfa32a4f1f7853f"' :
                                            'id="xs-components-links-module-TeamsModule-cb4bd4934f3af36e812acdd96994c57bb949180318e7b8926b38790c327f9dde4106686dabe1b9ed6ac04ed9be06c6111318f7e93293afd06dfa32a4f1f7853f"' }>
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