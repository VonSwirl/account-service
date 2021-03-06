/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './page-not-found.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/router/src/directives/router_link';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/common/src/location/location_strategy';
import * as import14 from '@angular/core/src/security';
var renderType_PageNotFoundComponent_Host:import0.RenderComponentType = (null as any);
class _View_PageNotFoundComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PageNotFoundComponent_0_4:import3.PageNotFoundComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PageNotFoundComponent_Host0,renderType_PageNotFoundComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-as-page-not-found',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PageNotFoundComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PageNotFoundComponent_0_4 = new import3.PageNotFoundComponent();
    this._appEl_0.initComponent(this._PageNotFoundComponent_0_4,[],compView_0);
    compView_0.create(this._PageNotFoundComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PageNotFoundComponent) && (0 === requestNodeIndex))) { return this._PageNotFoundComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_PageNotFoundComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PageNotFoundComponent_Host === (null as any))) { (renderType_PageNotFoundComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_PageNotFoundComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PageNotFoundComponentNgFactory:import9.ComponentFactory<import3.PageNotFoundComponent> = new import9.ComponentFactory<import3.PageNotFoundComponent>('app-as-page-not-found',viewFactory_PageNotFoundComponent_Host0,import3.PageNotFoundComponent);
const styles_PageNotFoundComponent:any[] = [];
var renderType_PageNotFoundComponent:import0.RenderComponentType = (null as any);
class _View_PageNotFoundComponent0 extends import1.AppView<import3.PageNotFoundComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _RouterLinkWithHref_11_3:import10.RouterLinkWithHref;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PageNotFoundComponent0,renderType_PageNotFoundComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'br',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'h1',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Oops! Page Not Found...',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_5 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','padding-20');
    this._text_6 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'img',(null as any));
    this.renderer.setElementAttribute(this._el_7,'alt','Thinking face');
    this.renderer.setElementAttribute(this._el_7,'class','thinking-face');
    this.renderer.setElementAttribute(this._el_7,'src','/assets/Thinking_Face_Emoji.png');
    this._text_8 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_5,'br',(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_5,'a',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','custom-link');
    this._RouterLinkWithHref_11_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import11.Router),this.parentInjector.get(import12.ActivatedRoute),this.parentInjector.get(import13.LocationStrategy));
    this._text_12 = this.renderer.createText(this._el_11,'Back to user page :)',(null as any));
    this._text_13 = this.renderer.createText(this._el_5,'\n',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_11,'click',this.eventHandler(this._handle_click_11_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.RouterLinkWithHref) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._RouterLinkWithHref_11_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0('/login');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_11_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_11_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_11_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_11,'href',this.viewUtils.sanitizer.sanitize(import14.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_11_3.ngOnDestroy();
  }
  private _handle_click_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_11_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_PageNotFoundComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PageNotFoundComponent> {
  if ((renderType_PageNotFoundComponent === (null as any))) { (renderType_PageNotFoundComponent = viewUtils.createRenderComponentType('C:/Users/p4309027/Downloads/account-service-j/assets/app/page-not-found/page-not-found.component.html',0,import8.ViewEncapsulation.None,styles_PageNotFoundComponent,{})); }
  return new _View_PageNotFoundComponent0(viewUtils,parentInjector,declarationEl);
}