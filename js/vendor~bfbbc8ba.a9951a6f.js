(window.webpackJsonp=window.webpackJsonp||[]).push([["vendor~bfbbc8ba"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ys})),n.d(e,"b",(function(){return Zs})),n.d(e,"c",(function(){return Wr})),n.d(e,"d",(function(){return Xr})),n.d(e,"e",(function(){return lr})),n.d(e,"f",(function(){return xr})),n.d(e,"g",(function(){return Vr}));var i=n("589b"),s=n("22e5"),r=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new r.b("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=r.a.DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=r.a.ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=r.a.WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends o.c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new E;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new E,t.enqueueRetryable(()=>i(this.currentUser))};const r=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new E)}},0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class k{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(v(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class A{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}getToken(){return Promise.resolve(new k(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.A;return this.A=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const i=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.A=t.token,new N(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=D(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function P(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new M(0,0))}static max(){return new x(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class V extends U{construct(t,e,n){return new V(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new I(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new V(e)}static emptyPath(){return new V([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends U{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new I(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new I(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new I(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new I(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(V.fromString(t))}static fromName(t){return new q(V.fromString(t).popFirst(5))}static empty(){return new q(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===V.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return V.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new V(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}B.UNKNOWN_ID=-1;function H(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=x.fromTimestamp(1e9===i?new M(n+1,0):new M(n,i));return new K(s,q.empty(),e)}function z(t){return new K(t.readTime,t.key,-1)}class K{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new K(x.min(),q.empty(),-1)}static max(){return new K(x.max(),q.empty(),-1)}}function G(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=q.comparator(t.documentKey,e.documentKey),0!==n?n:L(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==$)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new X((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof X?e:X.resolve(e)}catch(t){return X.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):X.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):X.reject(e)}static resolve(t){return new X((e,n)=>{e(t)})}static reject(t){return new X((e,n)=>{n(t)})}static waitFor(t){return new X((e,n)=>{let i=0,s=0,r=!1;t.forEach(t=>{++i,t.next(()=>{++s,r&&s===i&&e()},t=>n(t))}),r=!0,s===i&&e()})}static or(t){let e=X.resolve(!1);for(const n of t)e=e.next(t=>t?X.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}static mapArray(t,e){return new X((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next(t=>{r[c]=t,++o,o===s&&n(r)},t=>i(t))}})}static doWhile(t,e){return new X((n,i)=>{const s=()=>{!0===t()?e().next(()=>{s()},i):n()};s()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y.at=-1;class nt{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new it(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new it(this.root,t,this.comparator,!1)}getReverseIterator(){return new it(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new it(this.root,t,this.comparator,!0)}}class it{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:st.RED,this.left=null!=i?i:st.EMPTY,this.right=null!=s?s:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new st(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return st.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1,st.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,i,s){return this}insert(t,e,n){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ot(this.data.getIterator())}getIteratorFrom(t){return new ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof rt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class ot{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{constructor(t){this.fields=t,t.sort(j.comparator)}static empty(){return new at([])}unionWith(t){let e=new rt(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return P(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ut=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(t){if(v(!!t),"string"==typeof t){let e=0;const n=ut.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function dt(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pt(t){const e=ht(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class mt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof mt&&t.projectId===this.projectId&&t.database===this.database}}function yt(t){return null==t}function vt(t){return 0===t&&1/t==-1/0}function wt(t){return"number"==typeof t&&Number.isInteger(t)&&!vt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function It(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ft(t)?4:Pt(t)?9007199254740991:10:y()}function Et(t,e){if(t===e)return!0;const n=It(t);if(n!==It(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pt(t).isEqual(pt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ht(t.timestampValue),i=ht(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return dt(t.bytesValue).isEqual(dt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return lt(t.geoPointValue.latitude)===lt(e.geoPointValue.latitude)&&lt(t.geoPointValue.longitude)===lt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return lt(t.integerValue)===lt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=lt(t.doubleValue),i=lt(e.doubleValue);return n===i?vt(n)===vt(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return P(t.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Z(n)!==Z(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Et(n[t],i[t])))return!1;return!0}(t,e);default:return y()}}function Tt(t,e){return void 0!==(t.values||[]).find(t=>Et(t,e))}function _t(t,e){if(t===e)return 0;const n=It(t),i=It(e);if(n!==i)return L(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=lt(t.integerValue||t.doubleValue),i=lt(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return St(t.timestampValue,e.timestampValue);case 4:return St(pt(t),pt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=dt(t),i=dt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=L(n[t],i[t]);if(0!==e)return e}return L(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(lt(t.latitude),lt(e.latitude));return 0!==n?n:L(lt(t.longitude),lt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=_t(n[t],i[t]);if(e)return e}return L(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===bt.mapValue&&e===bt.mapValue)return 0;if(t===bt.mapValue)return 1;if(e===bt.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=L(i[t],r[t]);if(0!==e)return e;const o=_t(n[i[t]],s[r[t]]);if(0!==o)return o}return L(i.length,r.length)}(t.mapValue,e.mapValue);default:throw y()}}function St(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=ht(t),i=ht(e),s=L(n.seconds,i.seconds);return 0!==s?s:L(n.nanos,i.nanos)}function Ct(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=ht(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?dt(e.bytesValue).toBase64():"referenceValue"in e?(i=e.referenceValue,q.fromName(i).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(e){let n="[",i=!0;for(const s of e.values||[])i?i=!1:n+=",",n+=t(s);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const r of n)s?s=!1:i+=",",i+=`${r}:${t(e.fields[r])}`;return i+"}"}(e.mapValue):y();var n,i}(t)}function kt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function At(t){return!!t&&"integerValue"in t}function Nt(t){return!!t&&"arrayValue"in t}function Ot(t){return!!t&&"nullValue"in t}function Dt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rt(t){return!!t&&"mapValue"in t}function Lt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Lt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Rt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lt(e)}setAll(t){let e=j.emptyPath(),n={},i=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Lt(t):i.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Rt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Et(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Rt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){tt(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new Mt(Lt(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new xt(t,0,x.min(),x.min(),Mt.empty(),0)}static newFoundDocument(t,e,n){return new xt(t,1,e,x.min(),n,0)}static newNoDocument(t,e){return new xt(t,2,e,x.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,x.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ht=null}}function Vt(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Ut(t,e,n,i,s,r,o)}function Ft(t){const e=w(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+Ct(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),yt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Ct(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Ct(t)).join(",")),e.ht=t}return e.ht}function jt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Et(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ee(t.startAt,e.startAt)&&ee(t.endAt,e.endAt)}function qt(t){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Bt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new Ht(t,e,n):"array-contains"===e?new $t(t,n):"in"===e?new Wt(t,n):"not-in"===e?new Qt(t,n):"array-contains-any"===e?new Xt(t,n):new Bt(t,e,n)}static lt(t,e,n){return"in"===e?new zt(t,n):new Kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(_t(e,this.value)):null!==e&&It(this.value)===It(e)&&this.ft(_t(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ht extends Bt{constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.ft(e)}}class zt extends Bt{constructor(t,e){super(t,"in",e),this.keys=Gt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Kt extends Bt{constructor(t,e){super(t,"not-in",e),this.keys=Gt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Gt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>q.fromName(t.referenceValue))}class $t extends Bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Nt(e)&&Tt(e.arrayValue,this.value)}}class Wt extends Bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Tt(this.value.arrayValue,e)}}class Qt extends Bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Tt(this.value.arrayValue,e)}}class Xt extends Bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Nt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Tt(this.value.arrayValue,t))}}class Jt{constructor(t,e){this.position=t,this.inclusive=e}}class Yt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function te(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?q.comparator(q.fromName(o.referenceValue),n.key):_t(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function ee(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Et(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function ie(t,e,n,i,s,r,o,a){return new ne(t,e,n,i,s,r,o,a)}function se(t){return new ne(t)}function re(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oe(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ae(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ce(t){return null!==t.collectionGroup}function ue(t){const e=w(t);if(null===e._t){e._t=[];const t=ae(e),n=oe(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Yt(t)),e._t.push(new Yt(j.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yt(j.keyField(),t))}}}return e._t}function he(t){const e=w(t);if(!e.wt)if("F"===e.limitType)e.wt=Vt(e.path,e.collectionGroup,ue(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of ue(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Yt(n.field,e))}const n=e.endAt?new Jt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Jt(e.startAt.position,e.startAt.inclusive):null;e.wt=Vt(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.wt}function le(t,e,n){return new ne(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function de(t,e){return jt(he(t),he(e))&&t.limitType===e.limitType}function fe(t){return`${Ft(he(t))}|lt:${t.limitType}`}function pe(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ct(e.value)}`;var e}).join(", ")}]`),yt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Ct(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Ct(t)).join(",")),`Target(${e})`}(he(t))}; limitType=${t.limitType})`}function ge(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):q.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=te(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,ue(t),e))&&!(t.endAt&&!function(t,e,n){const i=te(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,ue(t),e))}(t,e)}function me(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ye(t){return(e,n)=>{let i=!1;for(const s of ue(t)){const t=ve(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function ve(t,e,n){const i=t.field.isKeyField()?q.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?_t(i,s):y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vt(e)?"-0":e}}function be(t){return{integerValue:""+t}}function Ie(t,e){return wt(e)?be(e):we(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){this._=void 0}}function Te(t,e,n){return t instanceof Ce?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ke?Ae(t,e):t instanceof Ne?Oe(t,e):function(t,e){const n=Se(t,e),i=Re(n)+Re(t.yt);return At(n)&&At(t.yt)?be(i):we(t.It,i)}(t,e)}function _e(t,e,n){return t instanceof ke?Ae(t,e):t instanceof Ne?Oe(t,e):n}function Se(t,e){return t instanceof De?At(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Ce extends Ee{}class ke extends Ee{constructor(t){super(),this.elements=t}}function Ae(t,e){const n=Le(e);for(const e of t.elements)n.some(t=>Et(t,e))||n.push(e);return{arrayValue:{values:n}}}class Ne extends Ee{constructor(t){super(),this.elements=t}}function Oe(t,e){let n=Le(e);for(const e of t.elements)n=n.filter(t=>!Et(t,e));return{arrayValue:{values:n}}}class De extends Ee{constructor(t,e){super(),this.It=t,this.yt=e}}function Re(t){return lt(t.integerValue||t.doubleValue)}function Le(t){return Nt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pe}static exists(t){return new Pe(void 0,t)}static updateTime(t){return new Pe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Me(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class xe{}function Ue(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ge(t.key,Pe.none()):new qe(t.key,t.data,Pe.none());{const n=t.data,i=Mt.empty();let s=new rt(j.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Be(t.key,i,new at(s.toArray()),Pe.none())}}function Ve(t,e,n){t instanceof qe?function(t,e,n){const i=t.value.clone(),s=ze(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Be?function(t,e,n){if(!Me(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ze(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(He(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Fe(t,e,n,i){return t instanceof qe?function(t,e,n,i){if(!Me(t.precondition,e))return n;const s=t.value.clone(),r=Ke(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Be?function(t,e,n,i){if(!Me(t.precondition,e))return n;const s=Ke(t.fieldTransforms,i,e),r=e.data;return r.setAll(He(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,i):function(t,e,n){return Me(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function je(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&P(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ke&&e instanceof ke||t instanceof Ne&&e instanceof Ne?P(t.elements,e.elements,Et):t instanceof De&&e instanceof De?Et(t.yt,e.yt):t instanceof Ce&&e instanceof Ce}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qe extends xe{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Be extends xe{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function He(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function ze(t,e,n){const i=new Map;v(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,_e(o,a,n[s]))}return i}function Ke(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,Te(t,r,e))}return i}class Ge extends xe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Qe;function Xe(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case We.OK:return b.OK;case We.CANCELLED:return b.CANCELLED;case We.UNKNOWN:return b.UNKNOWN;case We.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case We.INTERNAL:return b.INTERNAL;case We.UNAVAILABLE:return b.UNAVAILABLE;case We.UNAUTHENTICATED:return b.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case We.NOT_FOUND:return b.NOT_FOUND;case We.ALREADY_EXISTS:return b.ALREADY_EXISTS;case We.PERMISSION_DENIED:return b.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case We.ABORTED:return b.ABORTED;case We.OUT_OF_RANGE:return b.OUT_OF_RANGE;case We.UNIMPLEMENTED:return b.UNIMPLEMENTED;case We.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(Qe=We||(We={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){tt(this.inner,(e,n)=>{for(const[e,i]of n)t(e,i)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new nt(q.comparator);function Ze(){return Ye}const tn=new nt(q.comparator);function en(...t){let e=tn;for(const n of t)e=e.insert(n.key,n);return e}function nn(t){let e=tn;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function sn(){return on()}function rn(){return on()}function on(){return new Je(t=>t.toString(),(t,e)=>t.isEqual(e))}new nt(q.comparator);const an=new rt(q.comparator);function cn(...t){let e=an;for(const n of t)e=e.add(n);return e}const un=new rt(L);function hn(){return un}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ln(x.min(),i,hn(),Ze(),cn())}}class dn{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new dn(n,e,cn(),cn(),cn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e,n,i){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=i}}class pn{constructor(t,e){this.targetId=t,this.At=e}}class gn{constructor(t,e,n=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class mn{constructor(){this.Rt=0,this.bt=wn(),this.Pt=ct.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=cn(),e=cn(),n=cn();return this.bt.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:y()}}),new dn(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=wn()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class yn{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Ze(),this.qt=vn(),this.Kt=new rt(L)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach((t,n)=>{this.Ht(n)&&e(n)})}Yt(t){const e=t.targetId,n=t.At.count,i=this.Xt(e);if(i){const t=i.target;if(qt(t))if(0===n){const n=new q(t.path);this.jt(e,n,xt.newNoDocument(n,x.min()))}else v(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach((n,i)=>{const s=this.Xt(i);if(s){if(n.current&&qt(s.target)){const e=new q(s.target.path);null!==this.Ut.get(e)||this.ee(i,e)||this.jt(i,e,xt.newNoDocument(e,t))}n.Dt&&(e.set(i,n.xt()),n.Nt())}});let n=cn();this.qt.forEach((t,e)=>{let i=!0;e.forEachWhile(t=>{const e=this.Xt(t);return!e||2===e.purpose||(i=!1,!1)}),i&&(n=n.add(t))}),this.Ut.forEach((e,n)=>n.setReadTime(t));const i=new ln(t,e,this.Kt,this.Ut,n);return this.Ut=Ze(),this.qt=vn(),this.Kt=new rt(L),i}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,e)?i.kt(e,1):i.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new mn,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new rt(L),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new mn),this.Bt.getRemoteKeysForTarget(t).forEach(e=>{this.jt(t,e,null)})}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function vn(){return new nt(q.comparator)}function wn(){return new nt(q.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={asc:"ASCENDING",desc:"DESCENDING"},In={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class En{constructor(t,e){this.databaseId=t,this.gt=e}}function Tn(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _n(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Sn(t){return v(!!t),x.fromTimestamp(function(t){const e=ht(t);return new M(e.seconds,e.nanos)}(t))}function Cn(t,e){return function(t){return new V(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function kn(t){const e=V.fromString(t);return v(Bn(e)),e}function An(t,e){const n=kn(e);if(n.get(1)!==t.databaseId.projectId)throw new I(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Rn(n))}function Nn(t,e){return Cn(t.databaseId,e)}function On(t){const e=kn(t);return 4===e.length?V.emptyPath():Rn(e)}function Dn(t){return new V(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ln(t,e){return{documents:[Nn(t,e.path)]}}function Pn(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Nn(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nn(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(Dt(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Dt(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(t.field),op:Un(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Vn(t.field),direction:xn(t.dir)}}(t))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.gt||yt(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Mn(t){let e=On(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){v(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function t(e){return e?void 0!==e.unaryFilter?[qn(e)]:void 0!==e.fieldFilter?[jn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>t(e)).reduce((t,e)=>t.concat(e)):y():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Yt(Fn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,yt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Jt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Jt(n,e)}(n.endAt)),ie(e,s,o,r,a,"F",c,u)}function xn(t){return bn[t]}function Un(t){return In[t]}function Vn(t){return{fieldPath:t.canonicalString()}}function Fn(t){return j.fromServerFormat(t.fieldPath)}function jn(t){return Bt.create(Fn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function qn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fn(t.unaryFilter.field);return Bt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fn(t.unaryFilter.field);return Bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fn(t.unaryFilter.field);return Bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Fn(t.unaryFilter.field);return Bt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Bn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zn=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Kn=zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Ve(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Fe(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Fe(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rn();return this.mutations.forEach(i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Ue(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(x.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),cn())}isEqual(t){return this.batchId===t.batchId&&P(this.mutations,t.mutations,(t,e)=>je(t,e))&&P(this.baseMutations,t.baseMutations,(t,e)=>je(t,e))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $n{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e,n,i,s=x.min(),r=x.min(),o=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Wn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t){this.re=t}}function Xn(t){const e=Mn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?le(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(lt(t.integerValue));else if("doubleValue"in t){const n=lt(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),vt(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(""+(n.seconds||"")),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(dt(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Pt(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):y()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const t of Object.keys(n))this._e(t,e),this.ae(n[t],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const t of n)this.ae(t,e)}ge(t,e){this.le(e,37),q.fromName(t).path.forEach(t=>{this.le(e,60),this.Ie(t,e)})}le(t,e){t.fe(e)}we(t){t.fe(2)}}Jn.Te=new Jn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(){this.Ye=new Zn}addToCollectionParentIndex(t,e){return this.Ye.add(e),X.resolve()}getCollectionParents(t,e){return X.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return X.resolve()}deleteFieldIndex(t,e){return X.resolve()}getDocumentsMatchingTarget(t,e){return X.resolve(null)}getIndexType(t,e){return X.resolve(0)}getFieldIndexes(t,e){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,e){return X.resolve(K.min())}getMinOffsetFromCollectionGroup(t,e){return X.resolve(K.min())}updateCollectionGroup(t,e,n){return X.resolve()}updateIndexEntries(t,e){return X.resolve()}}class Zn{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new rt(V.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new rt(V.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ti{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ti(t,ti.DEFAULT_COLLECTION_PERCENTILE,ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti.DEFAULT_COLLECTION_PERCENTILE=10,ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ti.DEFAULT=new ti(41943040,ti.DEFAULT_COLLECTION_PERCENTILE,ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ti.DISABLED=new ti(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ei(0)}static vn(){return new ei(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{constructor(){this.changes=new Je(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?X.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.getBaseDocument(t,e,n))).next(t=>(null!==n&&Fe(n.mutation,t,at.empty(),M.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,cn()).next(()=>e))}getLocalViewOfDocuments(t,e,n=cn()){const i=sn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(t=>{let e=en();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=sn();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,cn()))}populateOverlays(t,e,n){const i=[];return n.forEach(t=>{e.has(t)||i.push(t)}),this.documentOverlayCache.getOverlays(t,i).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,i){let s=Ze();const r=on(),o=on();return e.forEach((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Be)?s=s.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Fe(o.mutation,e,o.mutation.getFieldMask(),M.now()))}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,e)=>r.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new ii(e,null!==(n=r.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=on();let i=new nt((t,e)=>t-e),s=cn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const s of t)s.keys().forEach(t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||at.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||cn()).add(t);i=i.insert(s.batchId,a)})}).next(()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=rn();c.forEach(t=>{if(!s.has(t)){const i=Ue(e.get(t),n.get(t));null!==i&&u.set(t,i),s=s.add(t)}}),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return X.waitFor(r)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ce(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):X.resolve(sn());let o=-1,a=s;return r.next(e=>X.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?X.resolve():this.getBaseDocument(t,e,n).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,s)).next(()=>this.computeViews(t,a,e,cn())).next(t=>({batchId:o,changes:nn(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(t=>{let e=en();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=en();return this.indexManager.getCollectionParents(t,i).next(r=>X.forEach(r,r=>{const o=function(t,e){return new ne(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,xt.newInvalidDocument(n)))});let n=en();return i.forEach((i,s)=>{const r=t.get(i);void 0!==r&&Fe(r.mutation,s,at.empty(),M.now()),ge(e,s)&&(n=n.insert(i,s))}),n})}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):X.resolve(xt.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return X.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Sn(n.createTime)}),X.resolve()}getNamedQuery(t,e){return X.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Xn(t.bundledQuery),readTime:Sn(t.readTime)}}(e)),X.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.overlays=new nt(q.comparator),this.es=new Map}getOverlay(t,e){return X.resolve(this.overlays.get(e))}getOverlays(t,e){const n=sn();return X.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,i)=>{this.ue(t,e,i)}),X.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.es.delete(n)),X.resolve()}getOverlaysForCollection(t,e,n){const i=sn(),s=e.length+1,r=new q(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return X.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new nt((t,e)=>t-e);const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=sn(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=sn(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=i)););return X.resolve(o)}ue(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new $n(e,n));let s=this.es.get(e);void 0===s&&(s=cn(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.ns=new rt(ci.ss),this.rs=new rt(ci.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new ci(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.cs(new ci(t,e))}hs(t,e){t.forEach(t=>this.removeReference(t,e))}ls(t){const e=new q(new V([])),n=new ci(e,t),i=new ci(e,t+1),s=[];return this.rs.forEachInRange([n,i],t=>{this.cs(t),s.push(t.key)}),s}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new q(new V([])),n=new ci(e,t),i=new ci(e,t+1);let s=cn();return this.rs.forEachInRange([n,i],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new ci(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ci{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return q.comparator(t.key,e.key)||L(t._s,e._s)}static os(t,e){return L(t._s,e._s)||q.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new rt(ci.ss)}checkEmpty(t){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Gn(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.gs=this.gs.add(new ci(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return X.resolve(r)}lookupMutationBatch(t,e){return X.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),s=i<0?0:i;return X.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ci(e,0),i=new ci(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,i],t=>{const e=this.ys(t._s);s.push(e)}),X.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(L);return e.forEach(t=>{const e=new ci(t,0),i=new ci(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],t=>{n=n.add(t._s)})}),X.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;q.isDocumentKey(s)||(s=s.child(""));const r=new ci(new q(s),0);let o=new rt(L);return this.gs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)},r),X.resolve(this.Is(o))}Is(t){const e=[];return t.forEach(t=>{const n=this.ys(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return X.forEach(e.mutations,i=>{const s=new ci(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=n})}An(t){}containsKey(t,e){const n=new ci(e,0),i=this.gs.firstAfterOrEqual(n);return X.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this.Es=t,this.docs=new nt(q.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return X.resolve(n?n.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let n=Ze();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():xt.newInvalidDocument(t))}),X.resolve(n)}getAllFromCollection(t,e,n){let i=Ze();const s=new q(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||G(z(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return X.resolve(i)}getAllFromCollectionGroup(t,e,n,i){y()}As(t,e){return X.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new li(this)}getSize(t){return X.resolve(this.size)}}class li extends ni{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)}),X.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.persistence=t,this.Rs=new Je(t=>Ft(t),jt),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ai,this.targetCount=0,this.vs=ei.Pn()}forEachTarget(t,e){return this.Rs.forEach((t,n)=>e(n)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),X.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new ei(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,X.resolve()}updateTargetData(t,e){return this.Dn(e),X.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Rs.forEach((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),X.waitFor(s).next(()=>i)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return X.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),X.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(e=>{s.push(i.markPotentiallyOrphaned(t,e))}),X.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),X.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return X.resolve(n)}containsKey(t,e){return X.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Y(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new di(this),this.indexManager=new Yn,this.remoteDocumentCache=function(t){return new hi(t)}(t=>this.referenceDelegate.xs(t)),this.It=new Qn(e),this.Ns=new ri(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new oi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new ui(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const i=new pi(this.Ss.next());return this.referenceDelegate.ks(),n(i).next(t=>this.referenceDelegate.Os(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Ms(t,e){return X.or(Object.values(this.Vs).map(n=>()=>n.containsKey(t,e)))}}class pi extends W{constructor(t){super(),this.currentSequenceNumber=t}}class gi{constructor(t){this.persistence=t,this.Fs=new ai,this.$s=null}static Bs(t){return new gi(t)}get Ls(){if(this.$s)return this.$s;throw y()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),X.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),X.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),X.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach(t=>this.Ls.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ls.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Ls,n=>{const i=q.fromPath(n);return this.Us(t,i).next(t=>{t||e.removeEntry(i,x.min())})}).next(()=>(this.$s=null,e.apply(t)))}updateLimboDocument(t,e){return this.Us(t,e).next(t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())})}xs(t){return 0}Us(t,e){return X.or([()=>X.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}static Ci(t,e){let n=cn(),i=cn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new mi(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next(s=>s||this.Oi(t,e,i,n)).next(n=>n||this.Mi(t,e))}ki(t,e){if(re(e))return X.resolve(null);let n=he(e);return this.indexManager.getIndexType(t,n).next(i=>0===i?null:(null!==e.limit&&1===i&&(e=le(e,null,"F"),n=he(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const s=cn(...i);return this.Ni.getDocuments(t,s).next(i=>this.indexManager.getMinOffset(t,n).next(n=>{const r=this.Fi(e,i);return this.$i(e,r,s,n.readTime)?this.ki(t,le(e,null,"F")):this.Bi(t,r,e,n)}))})))}Oi(t,e,n,i){return re(e)||i.isEqual(x.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next(s=>{const o=this.Fi(e,s);return this.$i(e,o,n,i)?this.Mi(t,e):(d()<=r.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pe(e)),this.Bi(t,o,e,H(i,-1)))})}Fi(t,e){let n=new rt(ye(t));return e.forEach((e,i)=>{ge(t,i)&&(n=n.add(i))}),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(t,e){return d()<=r.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",pe(e)),this.Ni.getDocumentsMatchingQuery(t,e,K.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e,n,i){this.persistence=t,this.Li=e,this.It=i,this.Ui=new nt(L),this.qi=new Je(t=>Ft(t),jt),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new si(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ui))}}function wi(t,e,n,i){return new vi(t,e,n,i)}async function bi(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const s=[],r=[];let o=cn();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({ji:t,removedBatchIds:s,addedBatchIds:r}))})})}function Ii(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function Ei(t,e,n){let i=cn(),s=cn();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=Ze();return n.forEach((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(x.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)}),{Wi:i,zi:s}})}function Ti(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let i;return n.Cs.getTargetData(t,e).next(s=>s?(i=s,X.resolve(i)):n.Cs.allocateTargetId(t).next(s=>(i=new Wn(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next(()=>i))))}).then(t=>{const i=n.Ui.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t})}async function _i(t,e,n){const i=w(t),s=i.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,t=>i.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!J(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Ui=i.Ui.remove(e),i.qi.delete(s.target)}function Si(t,e,n){const i=w(t);let s=x.min(),r=cn();return i.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const i=w(t),s=i.qi.get(n);return void 0!==s?X.resolve(i.Ui.get(s)):i.Cs.getTargetData(e,n)}(i,t,he(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{r=t})}).next(()=>i.Li.getDocumentsMatchingQuery(t,e,n?s:x.min(),n?r:cn())).next(t=>(Ci(i,me(e),t),{documents:t,Hi:r})))}function Ci(t,e,n){let i=t.Ki.get(e)||x.min();n.forEach((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)}),t.Ki.set(e,i)}class ki{constructor(){this.activeTargetIds=hn()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ai{constructor(){this.Lr=new ki,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new ki,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,i,s){const r=this.ho(t,e);f("RestConnection","Sending: ",r,n);const o={};return this.lo(o,i,s),this.fo(t,r,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",r,"request:",n),e})}_o(t,e,n,i,s,r){return this.ao(t,e,n,i,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}ho(t,e){const n=Di[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,i){return new Promise((s,r)=>{const o=new a.g;o.setWithCredentials(!0),o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),s(e);break;case a.a.TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),r(new I(b.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);r(new I(e,t.message))}else r(new I(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new I(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);o.send(e,"POST",c,n,15)})}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Object(a.h)(),r=Object(a.i)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a.d({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=i.join("");f("Connection","Creating WebChannel: "+c,o);const u=s.createWebChannel(c,o);let h=!1,l=!1;const d=new Ri({Hr:t=>{l?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),u.open(),h=!0),f("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,a.f.EventType.OPEN,()=>{l||f("Connection","WebChannel transport opened.")}),p(u,a.f.EventType.CLOSE,()=>{l||(l=!0,f("Connection","WebChannel transport closed"),d.io())}),p(u,a.f.EventType.ERROR,t=>{l||(l=!0,g("Connection","WebChannel transport errored:",t),d.io(new I(b.UNAVAILABLE,"The operation could not be completed")))}),p(u,a.f.EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];v(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){f("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=We[t];if(void 0!==e)return Xe(e)}(t),n=s.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,d.io(new I(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.ro(n)}}),p(r,a.b.STAT_EVENT,t=>{t.stat===a.e.PROXY?f("Connection","Detected buffering proxy"):t.stat===a.e.NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){return new En(t,!0)}class xi{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&f("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,n,i,s,r,o,a){this.Hs=t,this.vo=n,this.Vo=i,this.So=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new xi(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Do===e&&this.Qo(t,n)},e=>{t(()=>{const t=new I(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)})})}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr(()=>{n(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{n(()=>this.jo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget(()=>this.Do===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vi extends Ui{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.It=s}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.gt?(v(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:Xe(t.code);return new I(e,t.message||"")}(o);n=new gn(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=An(t,i.document.name),r=Sn(i.document.updateTime),o=new Mt({mapValue:{fields:i.document.fields}}),a=xt.newFoundDocument(s,r,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new fn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=An(t,i.document),r=i.readTime?Sn(i.readTime):x.min(),o=xt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new fn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=An(t,i.document),r=i.removedTargetIds||[];n=new fn([],r,s,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new $e(i),r=t.targetId;n=new pn(r,s)}}return n}(this.It,t),n=function(t){if(!("targetChange"in t))return x.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?x.min():e.readTime?Sn(e.readTime):x.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=Dn(this.It),e.addTarget=function(t,e){let n;const i=e.target;return n=qt(i)?{documents:Ln(t,i)}:{query:Pn(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=_n(t,e.resumeToken):e.snapshotVersion.compareTo(x.min())>0&&(n.readTime=Tn(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=Dn(this.It),e.removeTarget=t,this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=i,this.su=!1}iu(){if(this.su)throw new I(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(t,e,n,i,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(b.UNKNOWN,t.toString())})}_o(t,e,n,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.So._o(t,e,n,s,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(b.UNKNOWN,t.toString())})}terminate(){this.su=!0}}class ji{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu("Connection failed 1 times. Most recent error: "+t.toString()),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(p(e),this.uu=!1):f("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(t=>{n.enqueueAndForget(async()=>{Xi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.wu.add(4),await Hi(e),e.yu.set("Unknown"),e.wu.delete(4),await Bi(e)}(this))})}),this.yu=new ji(n,i)}}async function Bi(t){if(Xi(t))for(const e of t.mu)await e(!0)}async function Hi(t){for(const e of t.mu)await e(!1)}function zi(t,e){const n=w(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Qi(n)?Wi(n):ss(n).Oo()&&Gi(n,e))}function Ki(t,e){const n=w(t),i=ss(n);n._u.delete(e),i.Oo()&&$i(n,e),0===n._u.size&&(i.Oo()?i.$o():Xi(n)&&n.yu.set("Unknown"))}function Gi(t,e){t.pu.Mt(e.targetId),ss(t).Ho(e)}function $i(t,e){t.pu.Mt(e),ss(t).Jo(e)}function Wi(t){t.pu=new yn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),ss(t).start(),t.yu.cu()}function Qi(t){return Xi(t)&&!ss(t).ko()&&t._u.size>0}function Xi(t){return 0===w(t).wu.size}function Ji(t){t.pu=void 0}async function Yi(t){t._u.forEach((e,n)=>{Gi(t,e)})}async function Zi(t,e){Ji(t),Qi(t)?(t.yu.lu(e),Wi(t)):t.yu.set("Unknown")}async function ts(t,e,n){if(t.yu.set("Online"),e instanceof gn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t._u.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t._u.delete(i),t.pu.removeTarget(i))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await es(t,n)}else if(e instanceof fn?t.pu.Gt(e):e instanceof pn?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(x.min()))try{const e=await Ii(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t._u.get(i);s&&t._u.set(i,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),$i(t,e);const i=new Wn(n.target,e,1,n.sequenceNumber);Gi(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await es(t,e)}}async function es(t,e,n){if(!J(e))throw e;t.wu.add(1),await Hi(t),t.yu.set("Offline"),n||(n=()=>Ii(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Bi(t)})}async function ns(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const i=Xi(n);n.wu.add(3),await Hi(n),i&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Bi(n)}async function is(t,e){const n=w(t);e?(n.wu.delete(2),await Bi(n)):e||(n.wu.add(2),await Hi(n),n.yu.set("Unknown"))}function ss(t){return t.Iu||(t.Iu=function(t,e,n){const i=w(t);return i.iu(),new Vi(e,i.So,i.authCredentials,i.appCheckCredentials,i.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Yi.bind(null,t),Zr:Zi.bind(null,t),zo:ts.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Qi(t)?Wi(t):t.yu.set("Unknown")):(await t.Iu.stop(),Ji(t))})),t.Iu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new rs(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function os(t,e){if(p("AsyncQueue",`${e}: ${t}`),J(t))return new I(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t){this.comparator=t?(e,n)=>t(e,n)||q.comparator(e.key,n.key):(t,e)=>q.comparator(t.key,e.key),this.keyedMap=en(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new as(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof as))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new as;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.Eu=new nt(q.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):y():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal((e,n)=>{t.push(n)}),t}}class us{constructor(t,e,n,i,s,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,s){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new us(t,e,as.emptySet(e),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&de(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.Ru=void 0,this.listeners=[]}}class ls{constructor(){this.queries=new Je(t=>fe(t),de),this.onlineState="Unknown",this.bu=new Set}}async function ds(t,e){const n=w(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new hs),s)try{r.Ru=await n.onListen(i)}catch(t){const n=os(t,`Initialization of query '${pe(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&ms(n)}async function fs(t,e){const n=w(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function ps(t,e){const n=w(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.vu(t)&&(i=!0);s.Ru=t}}i&&ms(n)}function gs(t,e,n){const i=w(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function ms(t){t.bu.forEach(t=>{t.next()})}class ys{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new us(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=us.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(t){this.key=t}}class ws{constructor(t){this.key=t}}class bs{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=cn(),this.mutatedKeys=cn(),this.Gu=ye(t),this.Qu=new as(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new cs,i=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((t,e)=>{const u=i.get(t),h=ge(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Au();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc)),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new us(this.query,t.Qu,i,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new cs,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=cn(),this.Qu.forEach(t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))});const e=[];return t.forEach(t=>{this.Ku.has(t)||e.push(new ws(t))}),this.Ku.forEach(n=>{t.has(n)||e.push(new vs(n))}),e}tc(t){this.Uu=t.Hi,this.Ku=cn();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return us.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Is{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Es{constructor(t){this.key=t,this.nc=!1}}class Ts{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new Je(t=>fe(t),de),this.rc=new Map,this.oc=new Set,this.uc=new nt(q.comparator),this.cc=new Map,this.ac=new ai,this.hc={},this.lc=new Map,this.fc=ei.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function _s(t,e){const n=Vs(t);let i,s;const r=n.ic.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const t=await Ti(n.localStore,he(e));n.isPrimaryClient&&zi(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await Ss(n,e,i,"current"===r,t.resumeToken)}return s}async function Ss(t,e,n,i,s){t._c=(e,n,i)=>async function(t,e,n,i){let s=e.view.Wu(n);s.$i&&(s=await Si(t.localStore,e.query,!1).then(({documents:t})=>e.view.Wu(t,s)));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Rs(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const r=await Si(t.localStore,e,!0),o=new bs(e,r.Hi),a=o.Wu(r.documents),c=dn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Rs(t,n,u.Xu);const h=new Is(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Cs(t,e){const n=w(t),i=n.ic.get(e),s=n.rc.get(i.targetId);if(s.length>1)return n.rc.set(i.targetId,s.filter(t=>!de(t,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await _i(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Ki(n.remoteStore,i.targetId),Os(n,i.targetId)}).catch(Q)):(Os(n,i.targetId),await _i(n.localStore,i.targetId,!0))}async function ks(t,e){const n=w(t);try{const t=await function(t,e){const n=w(t),i=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];e.targetChanges.forEach((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ct.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,i)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Cs.updateTargetData(t,u))});let a=Ze(),c=cn();if(e.documentUpdates.forEach(i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))}),o.push(Ei(t,r,e.documentUpdates).next(t=>{a=t.Wi,c=t.zi})),!i.isEqual(x.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next(e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i));o.push(e)}return X.waitFor(o).next(()=>r.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ui=s,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const i=n.cc.get(e);i&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?v(i.nc):t.removedDocuments.size>0&&(v(i.nc),i.nc=!1))}),await Ms(n,t,e)}catch(t){await Q(t)}}function As(t,e,n){const i=w(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach((n,i)=>{const s=i.view.Pu(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let i=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.Pu(e)&&(i=!0)}),i&&ms(n)}(i.eventManager,e),t.length&&i.sc.zo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ns(t,e,n){const i=w(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.cc.get(e),r=s&&s.key;if(r){let t=new nt(q.comparator);t=t.insert(r,xt.newNoDocument(r,x.min()));const n=cn().add(r),s=new ln(x.min(),new Map,new rt(L),t,n);await ks(i,s),i.uc=i.uc.remove(r),i.cc.delete(e),Ps(i)}else await _i(i.localStore,e,!1).then(()=>Os(i,e,n)).catch(Q)}function Os(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(e=>{t.ac.containsKey(e)||Ds(t,e)})}function Ds(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Ki(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ps(t))}function Rs(t,e,n){for(const i of n)i instanceof vs?(t.ac.addReference(i.key,e),Ls(t,i)):i instanceof ws?(f("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||Ds(t,i.key)):y()}function Ls(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(f("SyncEngine","New document in limbo: "+n),t.oc.add(i),Ps(t))}function Ps(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(V.fromString(e)),i=t.fc.next();t.cc.set(i,new Es(n)),t.uc=t.uc.insert(n,i),zi(t.remoteStore,new Wn(he(se(n.path)),i,2,Y.at))}}async function Ms(t,e,n){const i=w(t),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach((t,a)=>{o.push(i._c(a,e,n).then(t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=mi.Ci(a.targetId,t);r.push(e)}}))}),await Promise.all(o),i.sc.zo(s),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>X.forEach(e,e=>X.forEach(e.Si,i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i)).next(()=>X.forEach(e.Di,i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))}catch(t){if(!J(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ui.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.Ui=n.Ui.insert(e,s)}}}(i.localStore,r))}async function xs(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await bi(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach(t=>{t.forEach(t=>{t.reject(new I(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ms(n,t.ji)}}function Us(t,e){const n=w(t),i=n.cc.get(e);if(i&&i.nc)return cn().add(i.key);{let t=cn();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function Vs(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ks.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Us.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ns.bind(null,e),e.sc.zo=ps.bind(null,e.eventManager),e.sc.wc=gs.bind(null,e.eventManager),e}class Fs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Mi(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return wi(this.persistence,new yi,t.initialUser,this.It)}yc(t){return new fi(gi.Bs,this.It)}gc(t){return new Ai}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class js{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>As(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=xs.bind(null,this.syncEngine),await is(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ls}createDatastore(t){const e=Mi(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Li(i));var i;return function(t,e,n,i){return new Fi(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>As(this.syncEngine,t,0),r=Oi.C()?new Oi:new Ni,new qi(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Ts(t,e,n,i,s,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await Hi(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t,e,n){if(!n)throw new I(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bs(t){if(!q.isDocumentKey(t))throw new I(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hs(t){if(q.isDocumentKey(t))throw new I(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Ks(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zs(t);throw new I(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gs=new Map;class $s{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new I(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new I(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new I(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $s({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new I(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $s(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new _;switch(t.type){case"gapi":const e=t.client;return new A(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new I(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Gs.get(t);e&&(f("ComponentProvider","Removing Datastore"),Gs.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Js(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qs(this.firestore,t,this._key)}}class Xs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Xs(this.firestore,t,this._query)}}class Js extends Xs{constructor(t,e,n){super(t,e,se(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qs(this.firestore,null,new q(t))}withConverter(t){return new Js(this.firestore,t,this._path)}}function Ys(t,e,...n){if(t=Object(o.n)(t),qs("collection","path",e),t instanceof Ws){const i=V.fromString(e,...n);return Hs(i),new Js(t,null,i)}{if(!(t instanceof Qs||t instanceof Js))throw new I(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(V.fromString(e,...n));return Hs(i),new Js(t.firestore,null,i)}}function Zs(t,e,...n){if(t=Object(o.n)(t),1===arguments.length&&(e=R.R()),qs("doc","path",e),t instanceof Ws){const i=V.fromString(e,...n);return Bs(i),new Qs(t,null,new q(i))}{if(!(t instanceof Qs||t instanceof Js))throw new I(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(V.fromString(e,...n));return Bs(i),new Qs(t.firestore,t instanceof Js?t.converter:null,new q(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):p("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=os(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function nr(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await bi(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ir(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sr(t);f("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>ns(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>ns(e.remoteStore,n)),t.onlineComponents=e}async function sr(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await nr(t,new Fs)),t.offlineComponents}async function rr(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await ir(t,new js)),t.onlineComponents}async function or(t){const e=await rr(t),n=e.eventManager;return n.onListen=_s.bind(null,e.syncEngine),n.onUnlisten=Cs.bind(null,e.syncEngine),n}function ar(t,e,n={}){const i=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,s){const r=new tr({next:r=>{e.enqueueAndForget(()=>fs(t,o));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new I(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new I(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new ys(se(n.path),r,{includeMetadataChanges:!0,ku:!0});return ds(t,o)}(await or(t),t.asyncQueue,e,n,i)),i.promise}function cr(t,e,n={}){const i=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,s){const r=new tr({next:n=>{e.enqueueAndForget(()=>fs(t,o)),n.fromCache&&"server"===i.source?s.reject(new I(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new ys(n,r,{includeMetadataChanges:!0,ku:!0});return ds(t,o)}(await or(t),t.asyncQueue,e,n,i)),i.promise}class ur{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new xi(this,"async_queue_retry"),this.Wc=()=>{const t=Pi();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Pi();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Pi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const e=new E;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(t){if(!J(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(t){const e=this.Bc.then(()=>(this.Gc=!0,t().catch(t=>{this.Kc=t,this.Gc=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.Gc=!1,t))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=rs.createAndSchedule(this,t,e,n,t=>this.Yc(t));return this.qc.push(i),i}zc(){this.Kc&&y()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class hr extends Ws{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new ur,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fr(this),this._firestoreClient.terminate()}}function lr(t,e){const n="object"==typeof t?t:Object(i.e)(),s="string"==typeof t?t:e||"(default)",r=Object(i.b)(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=Object(o.l)("firestore");t&&function(t,e,n,i={}){var s;const r=(t=Ks(t,Ws))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=u.MOCK_USER;else{e=Object(o.f)(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new I(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(r)}t._authCredentials=new S(new T(e,n))}}(r,...t)}return r}function dr(t){return t._firestoreClient||fr(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fr(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new gt(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new er(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pr(ct.fromBase64String(t))}catch(t){throw new I(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new pr(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new I(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=/^__.*__$/;function wr(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class br{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=i,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new br(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Or(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(wr(this.sa)&&vr.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Ir{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Mi(t)}da(t,e,n,i=!1){return new br({sa:t,methodName:e,fa:n,path:j.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Er(t){const e=t._freezeSettings(),n=Mi(t._databaseId);return new Ir(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tr(t,e,n,i=!1){return _r(n,t.da(i?4:3,e))}function _r(t,e){if(Cr(t=Object(o.n)(t)))return kr("Unsupported field value:",e,t),Sr(t,e);if(t instanceof mr)return function(t,e){if(!wr(e.sa))throw e.ha(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.ha(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=_r(s,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o.n)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ie(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:Tn(e.It,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Tn(e.It,n)}}if(t instanceof yr)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof pr)return{bytesValue:_n(e.It,t._byteString)};if(t instanceof Qs){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Cn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha("Unsupported field value: "+zs(t))}(t,e)}function Sr(t,e){const n={};return et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tt(t,(t,i)=>{const s=_r(i,e.ra(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function Cr(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof yr||t instanceof pr||t instanceof Qs||t instanceof mr)}function kr(t,e,n){if(!Cr(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=zs(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}}const Ar=new RegExp("[~\\*/\\[\\]]");function Nr(t,e,n){if(e.search(Ar)>=0)throw Or(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gr(...e.split("."))._internalPath}catch(i){throw Or(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Or(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=" in field "+i),o&&(c+=" in document "+s),c+=")"),new I(b.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Rr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Lr("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Rr extends Dr{data(){return super.data()}}function Lr(t,e){return"string"==typeof e?Nr(t,e):e instanceof gr?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new I(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mr{}function xr(t,...e){for(const n of e)t=n._apply(t);return t}class Ur extends Mr{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=Er(t.firestore),n=function(t,e,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new I(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){jr(o,r);const e=[];for(const n of o)e.push(Fr(i,t,n));a={arrayValue:{values:e}}}else a=Fr(i,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||jr(o,r),a=Tr(n,"where",o,"in"===r||"not-in"===r);const c=Bt.create(s,r,a);return function(t,e){if(e.dt()){const n=ae(t);if(null!==n&&!n.isEqual(e.field))throw new I(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=oe(t);null!==i&&qr(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new I(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new Xs(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new ne(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Vr(t,e,n){const i=e,s=Lr("where",t);return new Ur(s,i,n)}function Fr(t,e,n){if("string"==typeof(n=Object(o.n)(n))){if(""===n)throw new I(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ce(e)&&-1!==n.indexOf("/"))throw new I(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(V.fromString(n));if(!q.isDocumentKey(i))throw new I(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return kt(t,new q(i))}if(n instanceof Qs)return kt(t,n._key);throw new I(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zs(n)}.`)}function jr(t,e){if(!Array.isArray(t)||0===t.length)throw new I(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new I(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function qr(t,e,n){if(!n.isEqual(e))throw new I(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{convertValue(t,e="none"){switch(It(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(dt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return tt(t.fields,(t,i)=>{n[t]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new yr(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=function t(e){const n=e.mapValue.fields.__previous_value__;return ft(n)?t(n):n}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pt(t));default:return null}}convertTimestamp(t){const e=ht(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=V.fromString(t);v(Bn(n));const i=new mt(n.get(1),n.get(3)),s=new q(n.popFirst(5));return i.isEqual(e)||p(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zr extends Dr{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Lr("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Kr extends zr{data(t={}){return super.data(t)}}class Gr{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Hr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Kr(this._firestore,this._userDataWriter,n.key,n,new Hr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Kr(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Hr(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new Kr(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Hr(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:$r(e.type),doc:i,oldIndex:s,newIndex:r}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function $r(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wr(t){t=Ks(t,Qs);const e=Ks(t.firestore,hr);return ar(dr(e),t._key).then(n=>Jr(e,t,n))}class Qr extends Br{constructor(t){super(),this.firestore=t}convertBytes(t){return new pr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Qs(this.firestore,null,e)}}function Xr(t){t=Ks(t,Xs);const e=Ks(t.firestore,hr),n=dr(e),i=new Qr(e);return Pr(t._query),cr(n,t._query).then(n=>new Gr(e,i,t,n))}function Jr(t,e,n){const i=n.docs.get(e._key),s=new Qr(t);return new zr(t,s,e._key,i,new Hr(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){h=t}(i.a),Object(i.c)(new s.a("firestore",(t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new hr(new C(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new I(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mt(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s,n),s);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC").setMultipleInstances(!0)),Object(i.g)(c,"3.7.1",t),Object(i.g)(c,"3.7.1","esm2017")}()}).call(this,n("f28c"))},"1fd5":function(t,e,n){"use strict";(function(t,i){n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return T})),n.d(e,"g",(function(){return L})),n.d(e,"h",(function(){return A})),n.d(e,"i",(function(){return R})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return w})),n.d(e,"m",(function(){return I})),n.d(e,"n",(function(){return x})),n.d(e,"o",(function(){return c})),n.d(e,"p",(function(){return h})),n.d(e,"q",(function(){return k})),n.d(e,"r",(function(){return d})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return u})),n.d(e,"u",(function(){return l})),n.d(e,"v",(function(){return f})),n.d(e,"w",(function(){return O})),n.d(e,"x",(function(){return D})),n.d(e,"y",(function(){return g}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=s>>2,h=(3&s)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),i.push(n[u],n[h],n[l],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){const e=s(t);return r.encodeByteArray(e,!0)}(t).replace(/\./g,"")},a=function(t){try{return r.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function u(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function l(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function d(){const t=c();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function p(){return"object"==typeof indexedDB}function g(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,y=()=>{try{return m()||(()=>{if(void 0===i)return;const t=Object({NODE_ENV:"production",BASE_URL:"/BooksOrderAdminSystem/"}).__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&a(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},v=t=>{var e,n;return null===(n=null===(e=y())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},w=t=>{const e=v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},b=()=>{var t;return null===(t=y())||void 0===t?void 0:t.config},I=t=>{var e;return null===(e=y())||void 0===e?void 0:e["_"+t]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(C,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new _(i,o,n)}}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(N(n)&&N(r)){if(!A(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function N(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function D(t){const e={};return t.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function R(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){const n=new P(t,e);return n.subscribe.bind(n)}class P{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=M),void 0===i.error&&(i.error=M),void 0===i.complete&&(i.complete=M);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"),n("f28c"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var i=n("1fd5");class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new r(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return E})),n.d(e,"f",(function(){return I})),n.d(e,"g",(function(){return T}));var i=n("22e5"),s=n("e691"),r=n("1fd5"),o=n("1d25");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const c="@firebase/app",u=new s.b("@firebase/app"),h={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},l=new Map,d=new Map;function f(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function p(t){const e=t.name;if(d.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;d.set(e,t);for(const e of l.values())f(e,t);return!0}function g(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function m(t,e,n="[DEFAULT]"){g(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},v=new r.b("app","Firebase",y);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b="9.12.1";function I(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!=typeof o||!o)throw v.create("bad-app-name",{appName:String(o)});if(n||(n=Object(r.j)()),!n)throw v.create("no-options");const a=l.get(o);if(a){if(Object(r.h)(n,a.options)&&Object(r.h)(s,a.config))return a;throw v.create("duplicate-app",{appName:o})}const c=new i.b(o);for(const t of d.values())c.addComponent(t);const u=new w(n,s,c);return l.set(o,u),u}function E(t="[DEFAULT]"){const e=l.get(t);if(!e&&"[DEFAULT]"===t)return I();if(!e)throw v.create("no-app",{appName:t});return e}function T(t,e,n){var s;let r=null!==(s=h[t])&&void 0!==s?s:t;n&&(r+="-"+n);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}p(new i.a(r+"-version",()=>({library:r,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="firebase-heartbeat-store";let S=null;function C(){return S||(S=Object(o.a)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_)}}}).catch(t=>{throw v.create("idb-open",{originalErrorMessage:t.message})})),S}async function k(t,e){var n;try{const n=(await C()).transaction(_,"readwrite"),i=n.objectStore(_);return await i.put(e,A(t)),n.done}catch(t){if(t instanceof r.c)u.warn(t.message);else{const e=v.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});u.warn(e.message)}}}function A(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new D(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=O();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some(t=>t.date===e))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=O(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),R(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),R(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Object(r.e)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function O(){return(new Date).toISOString().substring(0,10)}class D{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(r.s)()&&Object(r.y)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await C()).transaction(_).objectStore(_).get(A(t))}catch(t){if(t instanceof r.c)u.warn(t.message);else{const n=v.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});u.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function R(t){return Object(r.e)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;L="",p(new i.a("platform-logger",t=>new a(t),"PRIVATE")),p(new i.a("heartbeat",t=>new N(t),"PRIVATE")),T(c,"0.8.2",L),T(c,"0.8.2","esm2017"),T("fire-js","")},"6a7c":function(t,e,n){"use strict";n.d(e,"a",(function(){return Ft})),n.d(e,"b",(function(){return We})),n.d(e,"c",(function(){return jt})),n.d(e,"d",(function(){return Bt})),n.d(e,"e",(function(){return qt}));var i=n("1fd5"),s=n("589b"),r=n("e691"),o=n("9ab4"),a=n("22e5");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new i.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),l=new r.b("@firebase/auth");function d(t,...e){l.logLevel<=r.a.ERROR&&l.error(`Auth (${s.a}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function g(t,e,n){const s=Object.assign(Object.assign({},u()),{[e]:n});return new i.b("auth","Firebase",s).create(e,{appName:t.name})}function m(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return h.create(t,...e)}function y(t,e,...n){if(!t)throw m(e,...n)}function v(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function w(t,e){t||v(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function I(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===_()||"https:"===_()}function _(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(i.t)()||Object(i.u)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(T()||Object(i.p)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},N=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,s,r={}){return R(t,r,async()=>{let r={},o={};s&&("GET"===e?o=s:r={body:JSON.stringify(s)});const a=Object(i.w)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),k.fetch()(P(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function R(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},A),e);try{const e=new M(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw x(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw x(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw x(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw x(t,"user-disabled",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(e){if(e instanceof i.c)throw e;f(t,"network-request-failed")}}async function L(t,e,n,i,s={}){const r=await D(t,e,n,i,s);return"mfaPendingCredential"in r&&f(t,"multi-factor-auth-required",{_serverResponse:r}),r}function P(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?C(t.config,s):`${t.config.apiScheme}://${s}`}class M{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"network-request-failed")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function x(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=p(t,e,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return 1e3*Number(t)}function F(t){var e;const[n,s,r]=t.split(".");if(void 0===n||void 0===s||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(i.d)(s);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(t){return d("Caught error parsing JWT payload as JSON",null===(e=t)||void 0===e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function j(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof i.c&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class q{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t){var e;const n=t.auth,i=await t.getIdToken(),s=await j(t,async function(t,e){return D(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));y(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const a=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map(t=>{var{providerId:e}=t,n=Object(o.a)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const c=(u=t.providerData,h=a,[...u.filter(t=>!h.some(e=>e.providerId===t.providerId)),...h]);var u,h;const l=t.isAnonymous,d=!(t.email&&r.passwordHash||(null==c?void 0:c.length)),f=!!l&&d,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new B(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y(void 0!==t.idToken,"internal-error"),y(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=F(t);return y(e,"internal-error"),y(void 0!==e.exp,"internal-error"),y(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:s,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await R(t,{},async()=>{const n=Object(i.w)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=P(t,s,"/v1/token","key="+r),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new z;return n&&(y("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(y("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(y("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new z,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e){y("string"==typeof t||void 0===t,"internal-error",{appName:e})}class G{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=Object(o.a)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new B(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await j(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Object(i.n)(t),s=await n.getIdToken(e),r=F(s);y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:r,token:s,authTime:U(V(r.auth_time)),issuedAtTime:U(V(r.iat)),expirationTime:U(V(r.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Object(i.n)(t);await H(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new G(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await j(this,async function(t,e){return D(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,c,u;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:I,providerData:E,stsTokenManager:T}=e;y(w&&T,t,"internal-error");const _=z.fromJSON(this.name,T);y("string"==typeof w,t,"internal-error"),K(h,t.name),K(l,t.name),y("boolean"==typeof b,t,"internal-error"),y("boolean"==typeof I,t,"internal-error"),K(d,t.name),K(f,t.name),K(p,t.name),K(g,t.name),K(m,t.name),K(v,t.name);const S=new G({uid:w,auth:t,email:l,emailVerified:b,displayName:h,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map(t=>Object.assign({},t))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const i=new z;i.updateFromServerResponse(e);const s=new G({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await H(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}$.type="NONE";const W=$;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){return`firebase:${t}:${e}:${n}`}class X{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Q(this.userKey,i.apiKey,s),this.fullPersistenceKey=Q("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?G._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new X(I(W),t,n);const i=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let s=i[0]||I(W);const r=Q(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const i=G._fromJSON(t,e);n!==s&&(o=i),s=n;break}}catch(t){}const a=i.filter(t=>t._shouldAllowMigration);return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==s)try{await t._remove(r)}catch(t){}})),new X(s,t,n)):new X(s,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(et(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(it(e))return"Blackberry";if(st(e))return"Webos";if(Z(e))return"Safari";if((e.includes("chrome/")||tt(e))&&!e.includes("edge/"))return"Chrome";if(nt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Y(t=Object(i.o)()){return/firefox\//i.test(t)}function Z(t=Object(i.o)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tt(t=Object(i.o)()){return/crios\//i.test(t)}function et(t=Object(i.o)()){return/iemobile/i.test(t)}function nt(t=Object(i.o)()){return/android/i.test(t)}function it(t=Object(i.o)()){return/blackberry/i.test(t)}function st(t=Object(i.o)()){return/webos/i.test(t)}function rt(t=Object(i.o)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ot(t=Object(i.o)()){return rt(t)||nt(t)||st(t)||it(t)||/windows phone/i.test(t)||et(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(t,e=[]){let n;switch(t){case"Browser":n=J(Object(i.o)());break;case"Worker":n=`${J(Object(i.o)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.a}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise((n,i)=>{try{n(t(e))}catch(t){i(t)}});n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(t){n.reverse();for(const t of n)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=t)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lt(this),this.idTokenSubscription=new lt(this),this.beforeStateQueue=new ct(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=I(e)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await X.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(t))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await H(t)}catch(t){if("auth/network-request-failed"!==(null===(e=t)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(i.n)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(I(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.b("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&I(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[I(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return y(r,this,"internal-error"),r.then(()=>s(this.currentUser)),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=at(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function ht(t){return Object(i.n)(t)}class lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(i.g)(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dt(t,e,n){const i=ht(t);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=ft(e),{host:o,port:a}=function(t){const e=ft(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const t=s[1];return{host:t,port:pt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:pt(e)}}}(e),c=null===a?"":":"+a;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ft(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class gt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return v("not implemented")}_getIdTokenResponse(t){return v("not implemented")}_linkToIdToken(t,e){return v("not implemented")}_getReauthenticationResolver(t){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt extends gt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new yt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new yt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",O(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return mt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends gt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new wt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=Object(o.a)(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new wt(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return vt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,vt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,vt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Object(i.w)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends gt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new It({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new It({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e));if(n.temporaryProof)throw x(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),bt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new It({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){var e,n,s,r,o,a;const c=Object(i.x)(Object(i.i)(t)),u=null!==(e=c.apiKey)&&void 0!==e?e:null,h=null!==(n=c.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=c.mode)&&void 0!==s?s:null);y(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(r=c.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(t){const e=function(t){const e=Object(i.x)(Object(i.i)(t)).link,n=e?Object(i.x)(Object(i.i)(e)).deep_link_id:null,s=Object(i.x)(Object(i.i)(t)).deep_link_id;return(s?Object(i.x)(Object(i.i)(s)).link:null)||s||n||e||t}(t);try{return new Et(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(){this.providerId=Tt.PROVIDER_ID}static credential(t,e){return yt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Et.parseLink(e);return y(n,"argument-error"),yt._fromEmailAndCode(t,n.code,n.tenantId)}}Tt.PROVIDER_ID="password",Tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends _t{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends St{constructor(){super("facebook.com")}static credential(t){return wt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch(t){return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ct.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return wt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return kt.credential(e,n)}catch(t){return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com",kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends St{constructor(){super("github.com")}static credential(t){return wt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch(t){return null}}}At.GITHUB_SIGN_IN_METHOD="github.com",At.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends St{constructor(){super("twitter.com")}static credential(t,e){return wt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Nt.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(t,e){return L(t,"POST","/v1/accounts:signUp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.TWITTER_SIGN_IN_METHOD="twitter.com",Nt.PROVIDER_ID="twitter.com";class Dt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await G._fromIdTokenResponse(t,n,i),r=Rt(n);return new Dt({user:s,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Rt(n);return new Dt({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Rt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt extends i.c{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Lt.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Lt(t,e,n,i)}}function Pt(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Lt._fromErrorAndOperation(t,n,e,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e,n=!1){const i=await j(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(t,e,n=!1){var i;const{auth:s}=t;try{const i=await j(t,Pt(s,"reauthenticate",e,t),n);y(i.idToken,s,"internal-error");const r=F(i.idToken);y(r,s,"internal-error");const{sub:o}=r;return y(t.uid===o,s,"user-mismatch"),Dt._forOperation(t,"reauthenticate",i)}catch(t){throw"auth/user-not-found"===(null===(i=t)||void 0===i?void 0:i.code)&&f(s,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e,n=!1){const i=await Pt(t,"signIn",e),s=await Dt._fromIdTokenResponse(t,"signIn",i);return n||await t._updateCurrentUser(s.user),s}async function Vt(t,e){return Ut(ht(t),e)}async function Ft(t,e,n){const i=ht(t),s=await Ot(i,{returnSecureToken:!0,email:e,password:n}),r=await Dt._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function jt(t,e,n){return Vt(Object(i.n)(t),Tt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qt(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const s=Object(i.n)(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await j(s,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){return D(t,"POST","/v1/accounts:update",e)}(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:t})=>"password"===t);a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Bt(t){return Object(i.n)(t).signOut()}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ht{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Object(i.o)();return Z(t)||rt(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ot(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const s=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Object(i.r)()&&10===document.documentMode&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,10):s()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}zt.type="LOCAL";const Kt=zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ht{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Gt.type="SESSION";const $t=Gt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Wt(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map(async t=>t(e.origin,s)),a=await function(t){return Promise.all(t.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.receivers=[];class Xt{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise((o,a)=>{const c=Qt("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(){return void 0!==Jt().WorkerGlobalScope&&"function"==typeof Jt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt="firebaseLocalStorageDb";class te{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ee(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ne(){const t=indexedDB.open(Zt,1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Zt);return new te(t).toPromise()}(),e(await ne()))})})}async function ie(t,e,n){const i=ee(t,!0).put({fbase_key:e,value:n});return new te(i).toPromise()}function se(t,e){const n=ee(t,!0).delete(e);return new te(n).toPromise()}class re{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await ne()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wt._getInstance(Yt()?self:null),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Xt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ne();return await ie(t,"__sak","1"),await se(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ie(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>async function(t,e){const n=ee(t,!1).get(e),i=await new te(n).toPromise();return void 0===i?null:i.value}(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>se(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=ee(t,!1).getAll();return new te(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}re.type="LOCAL";const oe=re;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return new Promise((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,r;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)})}function ce(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ce("rcb"),new S(3e4,6e4);async function ue(t,e,n){var i;const s=await n.verify();try{let r;if(y("string"==typeof s,t,"argument-error"),y("recaptcha"===n.type,t,"argument-error"),r="string"==typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){y("enroll"===e.type,t,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",O(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;y(n,t,"missing-multi-factor-info");return(await function(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",O(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",O(t,e))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t){this.providerId=he.PROVIDER_ID,this.auth=ht(t)}verifyPhoneNumber(t,e){return ue(this.auth,t,Object(i.n)(e))}static credential(t,e){return It._fromVerification(t,e)}static credentialFromResult(t){const e=t;return he.credentialFromTaggedObject(e)}static credentialFromError(t){return he.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?It._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(t,e){return e?I(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */he.PROVIDER_ID="phone",he.PHONE_SIGN_IN_METHOD="phone";class de extends gt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return vt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return vt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fe(t){return Ut(t.auth,new de(t),t.bypassAuthState)}function pe(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),xt(n,new de(t),t.bypassAuthState)}async function ge(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Mt(n,new de(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fe;case"linkViaPopup":case"linkViaRedirect":return ge;case"reauthViaPopup":case"reauthViaRedirect":return pe;default:f(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new S(2e3,1e4);class ve extends me{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,ve.currentPopupAction&&ve.currentPopupAction.cancel(),ve.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ve.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,ye.get())};t()}}ve.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we=new Map;class be extends me{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=we.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Te(e),i=Ee(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}we.set(this.auth._key(),t)}return this.bypassAuthState||we.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ie(t,e){we.set(t._key(),e)}function Ee(t){return I(t._redirectPersistence)}function Te(t){return Q("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(t,e,n=!1){const i=ht(t),s=le(i,e),r=new be(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Se{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ke(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!ke(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ce(t))}saveEventToCache(t){this.cachedEventUids.add(Ce(t)),this.lastProcessedEventTime=Date.now()}}function Ce(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function ke({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ae=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ne=/^https?/;async function Oe(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return D(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(De(t))return}catch(t){}f(t,"unauthorized-domain")}function De(t){const e=E(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Ne.test(n))return!1;if(Ae.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new S(3e4,6e4);function Le(){const t=Jt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Pe=null;function Me(t){return Pe=Pe||function(t){return new Promise((e,n)=>{var i,s,r;function o(){Le(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Le(),n(p(t,"network-request-failed"))},timeout:Re.get()})}if(null===(s=null===(i=Jt().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Jt().gapi)||void 0===r?void 0:r.load)){const e=ce("iframefcb");return Jt()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},ae("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw Pe=null,t})}(t),Pe}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new S(5e3,15e3),Ue={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ve=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fe(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?C(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:s.a},o=Ve.get(t.config.apiHost);o&&(r.eid=o);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Object(i.w)(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const je={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qe{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Be(t,e,n,s=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},je),{width:s.toString(),height:r.toString(),top:o,left:a}),h=Object(i.o)().toLowerCase();n&&(c=tt(h)?"_blank":n),Y(h)&&(e=e||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(function(t=Object(i.o)()){var e;return rt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(h)&&"_self"!==c)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",c),new qe(null);const d=window.open(e||"",c,l);y(d,t,"popup-blocked");try{d.focus()}catch(t){}return new qe(d)}function He(t,e,n,r,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:s.a,eventId:o};if(e instanceof _t){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(i.q)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof St){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const t of Object.keys(u))void 0===u[t]&&delete u[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return C(t,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${Object(i.w)(u).slice(1)}`}const ze=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$t,this._completeRedirectFn=_e,this._overrideRedirectResult=Ie}async _openPopup(t,e,n,i){var s;w(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Be(t,He(t,e,n,E(),i),Qt())}async _openRedirect(t,e,n,i){var s;return await this._originValidation(t),s=He(t,e,n,E(),i),Jt().location.href=s,new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await async function(t){const e=await Me(t),n=Jt().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Fe(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ue,dontclear:!0},e=>new Promise(async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=p(t,"network-request-failed"),r=Jt().setTimeout(()=>{i(s)},xe.get());function o(){Jt().clearTimeout(r),n(e)}e.ping(o).then(o,()=>{i(s)})}))}(t),n=new Se(t);return e.register("authEvent",e=>{y(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&e(!!s),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Oe(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ot()||Z()||rt()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge=Object(i.m)("authIdTokenMaxAge")||300;let $e=null;function We(t=Object(s.e)()){const e=Object(s.b)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Object(s.b)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),s=n.getOptions();if(Object(i.h)(s,null!=e?e:{}))return t;f(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:ze,persistence:[oe,Kt,$t]}),r=Object(i.m)("authTokenSyncURL");if(r){const t=(o=r,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Ge)return;const i=null==e?void 0:e.token;$e!==i&&($e=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:"Bearer "+i}:{}}))});!function(t,e,n){Object(i.n)(t).beforeAuthStateChanged(e,n)}(n,t,()=>t(n.currentUser)),function(t,e,n,s){Object(i.n)(t).onIdTokenChanged(e,n,s)}(n,e=>t(e))}var o;const a=Object(i.k)("auth");return a&&dt(n,"http://"+a),n}var Qe;Qe="Browser",Object(s.c)(new a.a("auth",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((t,n)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null==r?void 0:r.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:r,clientPlatform:Qe,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:at(Qe)},o=new ut(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(I);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider("auth-internal").initialize()})),Object(s.c)(new a.a("auth-internal",t=>(t=>new Ke(t))(ht(t.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(s.g)("@firebase/auth","0.20.10",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Qe)),Object(s.g)("@firebase/auth","0.20.10","esm2017")},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Jn})),n.d(e,"b",(function(){return Zn})),n.d(e,"c",(function(){return Yn})),n.d(e,"d",(function(){return ei})),n.d(e,"e",(function(){return ti})),n.d(e,"f",(function(){return ni})),n.d(e,"g",(function(){return ii})),n.d(e,"h",(function(){return Qn})),n.d(e,"i",(function(){return Xn}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},r={},o=o||{},a=s||self;function c(){}function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var l="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function v(){this.s=this.s,this.o=this.o}var w={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,l)&&t[l]||(t[l]=++d)}(this);delete w[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function I(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function E(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(u(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let s=0;s<i;s++)t[e+s]=n[s]}else t.push(n)}}function T(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(t){}return t}();function S(t){return/^[\s\xa0]*$/.test(t)}var C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return t<e?-1:t>e?1:0}function A(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function N(t){return-1!=A().indexOf(t)}function O(t){return O[" "](t),t}O[" "]=c;var D,R,L=N("Opera"),P=N("Trident")||N("MSIE"),M=N("Edge"),x=M||P,U=N("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),V=-1!=A().toLowerCase().indexOf("webkit")&&!N("Edge");function F(){var t=a.document;return t?t.documentMode:void 0}t:{var j="",q=(R=A(),U?/rv:([^\);]+)(\)|;)/.exec(R):M?/Edge\/([\d\.]+)/.exec(R):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(R):V?/WebKit\/(\S+)/.exec(R):L?/(?:Version)[ \/]?(\S+)/.exec(R):void 0);if(q&&(j=q?q[1]:""),P){var B=F();if(null!=B&&B>parseFloat(j)){D=String(B);break t}}D=j}var H,z={};function K(){return function(t){var e=z;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=C(String(D)).split("."),n=C("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=k(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||k(0==s[2].length,0==r[2].length)||k(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(a.document&&P){var G=F();H=G||(parseInt(D,10)||void 0)}else H=void 0;var $=H;function W(t,e){if(T.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(U){t:{try{O(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.X.h.call(this)}}y(W,T);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++J,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tt(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function st(t){this.src=t,this.g={},this.h=0}function rt(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=b(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}st.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ot(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Y(e,this.src,r,!!i,s)).ea=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ct={};function ut(t,e,n,i,s){if(i&&i.once)return function t(e,n,i,s,r){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],i,s,r);return null}return i=mt(i),e&&e[X]?e.O(n,i,h(s)?!!s.capture:!!s,r):ht(e,n,i,!0,s,r)}(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ut(t,e[r],n,i,s);return null}return n=mt(n),t&&t[X]?t.N(e,n,h(i)?!!i.capture:!!i,s):ht(t,e,n,!1,i,s)}function ht(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=h(s)?!!s.capture:!!s,a=pt(t);if(a||(t[at]=a=new st(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){const t=ft;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)_||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(dt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function lt(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[X])rt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(dt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=pt(e))?(rt(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function dt(t){return t in ct?ct[t]:ct[t]="on"+t}function ft(t,e){if(t.ba)t=!0;else{e=new W(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&lt(t),t=n.call(i,e)}return t}function pt(t){return(t=t[at])instanceof st?t:null}var gt="__closure_events_fn_"+(1e9*Math.random()>>>0);function mt(t){return"function"==typeof t?t:(t[gt]||(t[gt]=function(e){return t.handleEvent(e)}),t[gt])}function yt(){v.call(this),this.i=new st(this),this.P=this,this.I=null}function vt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new T(e,t);else if(e instanceof T)e.target=e.target||t;else{var s=e;it(e=new T(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=wt(o,i,!0,e)&&s}if(s=wt(o=e.g=t,i,!0,e)&&s,s=wt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=wt(o=e.g=n[r],i,!1,e)&&s}function wt(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&rt(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}y(yt,v),yt.prototype[X]=!0,yt.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,s,r){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],i,s,r);else s=h(s)?!!s.capture:!!s,i=mt(i),e&&e[X]?(e=e.i,(n=String(n).toString())in e.g&&(-1<(i=ot(o=e.g[n],i,s,r))&&(Z(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete e.g[n],e.h--)))):e&&(e=pt(e))&&(n=e.g[n.toString()],e=-1,n&&(e=ot(n,i,s,r)),(i=-1<e?n[e]:null)&&lt(i))}(this,t,e,n,i)},yt.prototype.M=function(){if(yt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Z(n[i]);delete e.g[t],e.h--}}this.I=null},yt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},yt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var bt=a.JSON.stringify;function It(){var t=At;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Et,Tt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new _t,t=>t.reset());class _t{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function St(t){a.setTimeout(()=>{throw t},0)}function Ct(t,e){Et||function(){var t=a.Promise.resolve(void 0);Et=function(){t.then(Nt)}}(),kt||(Et(),kt=!0),At.add(t,e)}var kt=!1,At=new class{constructor(){this.h=this.g=null}add(t,e){const n=Tt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Nt(){for(var t;t=It();){try{t.h.call(t.g)}catch(t){St(t)}var e=Tt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kt=!1}function Ot(t,e){yt.call(this),this.h=t||1,this.g=e||a,this.j=g(this.lb,this),this.l=Date.now()}function Dt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Rt(t,e,n){if("function"==typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}y(Ot,yt),(i=Ot.prototype).ca=!1,i.R=null,i.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),vt(this,"tick"),this.ca&&(Dt(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Ot.X.M.call(this),Dt(this),delete this.g};class Lt extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=Rt(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(t){v.call(this),this.h=t,this.g={}}y(Pt,v);var Mt=[];function xt(t,e,n,i){Array.isArray(n)||(n&&(Mt[0]=n.toString()),n=Mt);for(var s=0;s<n.length;s++){var r=ut(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ut(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&lt(t)}),t),t.g={}}function Vt(){this.g=!0}function Ft(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return bt(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Pt.prototype.M=function(){Pt.X.M.call(this),Ut(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vt.prototype.Aa=function(){this.g=!1},Vt.prototype.info=function(){};var jt={},qt=null;function Bt(){return qt=qt||new yt}function Ht(t){T.call(this,jt.Pa,t)}function zt(t){const e=Bt();vt(e,new Ht(e,t))}function Kt(t,e){T.call(this,jt.STAT_EVENT,t),this.stat=e}function Gt(t){const e=Bt();vt(e,new Kt(e,t))}function $t(t,e){T.call(this,jt.Qa,t),this.size=e}function Wt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}jt.Pa="serverreachability",y(Ht,T),jt.STAT_EVENT="statevent",y(Kt,T),jt.Qa="timingevent",y($t,T);var Qt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Jt(){}function Yt(t){return t.h||(t.h=t.i())}function Zt(){}Jt.prototype.h=null;var te,ee={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ne(){T.call(this,"d")}function ie(){T.call(this,"c")}function se(){}function re(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Pt(this),this.O=ae,t=x?125:void 0,this.T=new Ot(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}y(ne,T),y(ie,T),y(se,Jt),se.prototype.g=function(){return new XMLHttpRequest},se.prototype.i=function(){return{}},te=new se;var ae=45e3,ce={},ue={};function he(t,e,n){t.K=1,t.v=Ne(_e(e)),t.s=n,t.P=!0,le(t,null)}function le(t,e){t.F=Date.now(),ge(t),t.A=_e(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Be(n.i,"t",i),t.C=0,n=t.l.H,t.h=new oe,t.g=Bn(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Lt(g(t.La,t,t.g),t.N)),xt(t.S,t.g,"readystatechange",t.ib),e=t.H?et(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),zt(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function de(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function fe(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=pe(t,n),i==ue){4==e&&(t.o=4,Gt(14),s=!1),Ft(t.j,t.m,null,"[Incomplete Response]");break}if(i==ce){t.o=4,Gt(15),Ft(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Ft(t.j,t.m,i,null),be(t,i)}de(t)&&i!=ue&&i!=ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Gt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pn(e),e.K=!0,Gt(11))):(Ft(t.j,t.m,n,"[Invalid Chunked Response]"),we(t),ve(t))}function pe(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ue:(n=Number(e.substring(n,i)),isNaN(n)?ce:(i+=1)+n>e.length?ue:(e=e.substr(i,n),t.C=i+n,e))}function ge(t){t.V=Date.now()+t.O,me(t,t.O)}function me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Wt(g(t.gb,t),e)}function ye(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ve(t){0==t.l.G||t.I||Un(t.l,t)}function we(t){ye(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Dt(t.T),Ut(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||We(n.h,t)))if(!t.J&&We(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;xn(n),Cn(n)}Ln(n),Gt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=Wt(g(n.cb,n),6e3));if(1>=$e(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Fn(n,11)}else if((t.J||n.g==t)&&xn(n),!S(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Qe(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Ae(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=qn(i,i.H?i.ka:null,i.V),o.J){Xe(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(ye(a),ge(a)),i.g=o}else Rn(i);0<n.i.length&&An(n)}else"stop"!=u[0]&&"close"!=u[0]||Fn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Fn(n,7):Sn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}zt(4)}catch(t){}}function Ie(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(u(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}(i=re.prototype).setTimeout=function(t){this.O=t},i.ib=function(t){t=t.target;const e=this.L;e&&3==wn(t)?e.l():this.La(t)},i.La=function(t){try{if(t==this.g)t:{const l=wn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||x||this.g&&(this.h.h||this.g.fa()||bn(this.g)))){this.I||4!=l||7==e||zt(8==e||0>=d?3:2),ye(this);var n=this.g.aa();this.Y=n;e:if(de(this)){var i=bn(this.g);t="";var s=i.length,r=4==wn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){we(this),ve(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Gt(12),we(this),ve(this);break t}Ft(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,be(this,n)}this.P?(fe(this,l,o),x&&this.i&&3==l&&(xt(this.S,this.T,"tick",this.hb),this.T.start())):(Ft(this.j,this.m,o,null),be(this,o)),4==l&&we(this),this.i&&!this.I&&(4==l?Un(this.l,this):(this.i=!1,ge(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gt(12)):(this.o=0,Gt(13)),we(this),ve(this)}}}catch(t){}},i.hb=function(){if(this.g){var t=wn(this.g),e=this.g.fa();this.C<e.length&&(ye(this),fe(this,t,e),this.i&&4!=t&&ge(this))}},i.cancel=function(){this.I=!0,we(this)},i.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(zt(3),Gt(17)),we(this),this.o=2,ve(this)):me(this,this.V-t)};var Ee=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Te(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Te){this.h=void 0!==e?e:t.h,Se(this,t.j),this.s=t.s,this.g=t.g,Ce(this,t.m),this.l=t.l,e=t.i;var n=new Ve;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ke(this,n),this.o=t.o}else t&&(n=String(t).match(Ee))?(this.h=!!e,Se(this,n[1]||"",!0),this.s=Oe(n[2]||""),this.g=Oe(n[3]||"",!0),Ce(this,n[4]),this.l=Oe(n[5]||"",!0),ke(this,n[6]||"",!0),this.o=Oe(n[7]||"")):(this.h=!!e,this.i=new Ve(null,this.h))}function _e(t){return new Te(t)}function Se(t,e,n){t.j=n?Oe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ce(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ke(t,e,n){e instanceof Ve?(t.i=e,function(t,e){e&&!t.j&&(Fe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(je(this,e),Be(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=De(e,xe)),t.i=new Ve(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Ne(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function De(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Re),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Re(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Te.prototype.toString=function(){var t=[],e=this.j;e&&t.push(De(e,Le,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(De(e,Le,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(De(n,"/"==n.charAt(0)?Me:Pe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",De(n,Ue)),t.join("")};var Le=/[#\/\?@]/g,Pe=/[#\?:]/g,Me=/[#\?]/g,xe=/[#\?@]/g,Ue=/#/g;function Ve(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function je(t,e){Fe(t),e=He(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qe(t,e){return Fe(t),e=He(t,e),t.g.has(e)}function Be(t,e,n){je(t,e),0<n.length&&(t.i=null,t.g.set(He(t,e),I(n)),t.h+=n.length)}function He(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Ve.prototype).add=function(t,e){Fe(this),this.i=null,t=He(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Fe(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},i.oa=function(){Fe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let t=0;t<s.length;t++)n.push(e[i])}return n},i.W=function(t){Fe(this);let e=[];if("string"==typeof t)qe(this,t)&&(e=e.concat(this.g.get(He(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return Fe(this),this.i=null,qe(this,t=He(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ze(t){this.l=t||Ke,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ke=10;function Ge(t){return!!t.h||!!t.g&&t.g.size>=t.j}function $e(t){return t.h?1:t.g?t.g.size:0}function We(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Qe(t,e){t.g?t.g.add(e):t.h=e}function Xe(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Je(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function Ye(){}function Ze(){this.g=new Ye}function tn(t,e,n){const i=n||"";try{Ie(t,(function(t,n){let s=t;h(t)&&(s=bt(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function en(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function nn(t){this.l=t.ac||null,this.j=t.jb||!1}function sn(t,e){yt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze.prototype.cancel=function(){if(this.i=Je(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ye.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Ye.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(nn,Jt),nn.prototype.g=function(){return new sn(this.l,this.j)},nn.prototype.i=function(t){return function(){return t}}({}),y(sn,yt);var rn=0;function on(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function an(t){t.readyState=4,t.l=null,t.j=null,t.A=null,cn(t)}function cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=sn.prototype).open=function(t,e){if(this.readyState!=rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,cn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,an(this)),this.readyState=rn},i.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;on(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?an(this):cn(this),3==this.readyState&&on(this)}},i.Va=function(t){this.g&&(this.response=this.responseText=t,an(this))},i.Ua=function(t){this.g&&(this.response=t,an(this))},i.ga=function(){this.g&&an(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var un=a.JSON.parse;function hn(t){yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ln,this.K=this.L=!1}y(hn,yt);var ln="",dn=/^https?$/i,fn=["POST","PUT"];function pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gn(t),yn(t)}function gn(t){t.D||(t.D=!0,vt(t,"complete"),vt(t,"error"))}function mn(t){if(t.h&&void 0!==o&&(!t.C[1]||4!=wn(t)||2!=t.aa()))if(t.v&&4==wn(t))Rt(t.Ha,0,t);else if(vt(t,"readystatechange"),4==wn(t)){t.h=!1;try{const o=t.aa();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var s=String(t.H).match(Ee)[1]||null;if(!s&&a.self&&a.self.location){var r=a.self.location.protocol;s=r.substr(0,r.length-1)}i=!dn.test(s?s.toLowerCase():"")}n=i}if(n)vt(t,"complete"),vt(t,"success");else{t.m=6;try{var c=2<wn(t)?t.g.statusText:""}catch(t){c=""}t.j=c+" ["+t.aa()+"]",gn(t)}}finally{yn(t)}}}function yn(t,e){if(t.g){vn(t);const n=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||vt(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function wn(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ln:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function In(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function En(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=In(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ae(t,e,n))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _n(t){this.Ca=0,this.i=[],this.j=new Vt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Tn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Tn("baseRetryDelayMs",5e3,t),this.bb=Tn("retryDelaySeedMs",1e4,t),this.$a=Tn("forwardChannelMaxRetries",2,t),this.ta=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ze(t&&t.concurrentRequestLimit),this.Fa=new Ze,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Sn(t){if(kn(t),3==t.G){var e=t.U++,n=_e(t.F);Ae(n,"SID",t.I),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),On(t,n),(e=new re(t,t.j,e,void 0)).K=2,e.v=Ne(_e(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Bn(e.l,null),e.g.da(e.v)),e.F=Date.now(),ge(e)}jn(t)}function Cn(t){t.g&&(Pn(t),t.g.cancel(),t.g=null)}function kn(t){Cn(t),t.u&&(a.clearTimeout(t.u),t.u=null),xn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function An(t){Ge(t.h)||t.m||(t.m=!0,Ct(t.Ja,t),t.C=0)}function Nn(t,e){var n;n=e?e.m:t.U++;const i=_e(t.F);Ae(i,"SID",t.I),Ae(i,"RID",n),Ae(i,"AID",t.T),On(t,i),t.o&&t.s&&En(i,t.o,t.s),n=new re(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Dn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Qe(t.h,n),he(n,i,e)}function On(t,e){t.ia&&tt(t.ia,(function(t,n){Ae(e,n,t)})),t.l&&Ie({},(function(t,n){Ae(e,n,t)}))}function Dn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?g(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{tn(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Rn(t){t.g||t.u||(t.Z=1,Ct(t.Ia,t),t.A=0)}function Ln(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Wt(g(t.Ia,t),Vn(t,t.A)),t.A++,!0)}function Pn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function Mn(t){t.g=new re(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=_e(t.sa);Ae(e,"RID","rpc"),Ae(e,"SID",t.I),Ae(e,"CI",t.L?"0":"1"),Ae(e,"AID",t.T),Ae(e,"TYPE","xmlhttp"),On(t,e),t.o&&t.s&&En(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ne(_e(e)),n.s=null,n.P=!0,le(n,t)}function xn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function Un(t,e){var n=null;if(t.g==e){xn(t),Pn(t),t.g=null;var i=2}else{if(!We(t.h,e))return;n=e.D,Xe(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;vt(i=Bt(),new $t(i,n,e,s)),An(t)}else Rn(t);else if(3==(s=e.o)||0==s&&0<t.pa||!(1==i&&function(t,e){return!($e(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=Wt(g(t.Ja,t,e),Vn(t,t.C)),t.C++,!0))}(t,e)||2==i&&Ln(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}function Vn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=g(t.kb,t);n||(n=new Te("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Se(n,"https"),Ne(n)),function(t,e){const n=new Vt;if(a.Image){const i=new Image;i.onload=m(en,n,i,"TestLoadImage: loaded",!0,e),i.onerror=m(en,n,i,"TestLoadImage: error",!1,e),i.onabort=m(en,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=m(en,n,i,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Gt(2);t.G=0,t.l&&t.l.va(e),jn(t),kn(t)}function jn(t){if(t.G=0,t.la=[],t.l){const e=Je(t.h);0==e.length&&0==t.i.length||(E(t.la,e),E(t.la,t.i),t.h.i.length=0,I(t.i),t.i.length=0),t.l.ua()}}function qn(t,e,n){var i=n instanceof Te?_e(n):new Te(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Ce(i,i.m);else{var s=a.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Te(null,void 0);i&&Se(r,i),e&&(r.g=e),s&&Ce(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&Ae(i,n,e),Ae(i,"VER",t.ma),On(t,i),i}function Bn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new hn(new nn({jb:!0})):new hn(t.ra)).Ka(t.H),e}function Hn(){}function zn(){if(P&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function Kn(t,e){yt.call(this),this.g=new _n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Wn(this)}function Gn(t){ne.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function $n(){ie.call(this),this.status=1}function Wn(t){this.g=t}(i=hn.prototype).Ka=function(t){this.L=t},i.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():te.g(),this.C=this.u?Yt(this.u):Yt(te),this.g.onreadystatechange=g(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void pn(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=a.FormData&&t instanceof a.FormData,!(0<=b(fn,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vn(this),0<this.B&&((this.K=function(t){return P&&K()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.qa,this)):this.A=Rt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){pn(this,t)}},i.qa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vt(this,"complete"),vt(this,"abort"),yn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yn(this,!0)),hn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?mn(this):this.fb())},i.fb=function(){mn(this)},i.aa=function(){try{return 2<wn(this)?this.g.status:-1}catch(t){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),un(e)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=_n.prototype).ma=8,i.G=1,i.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new re(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=et(r),it(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Dn(this,s,e),Ae(n=_e(this.F),"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),On(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(In(r)))+"&"+e:this.o&&En(n,this.o,r)),Qe(this.h,s),this.Ya&&Ae(n,"TYPE","init"),this.O?(Ae(n,"$req",e),Ae(n,"SID","null"),s.Z=!0,he(s,n,null)):he(s,n,e),this.G=2}}else 3==this.G&&(t?Nn(this,t):0==this.i.length||Ge(this.h)||Nn(this))},i.Ia=function(){if(this.u=null,Mn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wt(g(this.eb,this),t)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Gt(10),Cn(this),Mn(this))},i.cb=function(){null!=this.v&&(this.v=null,Cn(this),Ln(this),Gt(19))},i.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Gt(2)):(this.j.info("Failed to ping google.com"),Gt(1))},(i=Hn.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},zn.prototype.g=function(t,e){return new Kn(t,e)},y(Kn,yt),Kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Gt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=qn(t,null,t.V),An(t)},Kn.prototype.close=function(){Sn(this.g)},Kn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=bt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&An(e)},Kn.prototype.M=function(){this.g.l=null,delete this.j,Sn(this.g),delete this.g,Kn.X.M.call(this)},y(Gn,ne),y($n,ie),y(Wn,Hn),Wn.prototype.xa=function(){vt(this.g,"a")},Wn.prototype.wa=function(t){vt(this.g,new Gn(t))},Wn.prototype.va=function(t){vt(this.g,new $n(t))},Wn.prototype.ua=function(){vt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Kn.prototype.send=Kn.prototype.u,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,Qt.NO_ERROR=0,Qt.TIMEOUT=8,Qt.HTTP_ERROR=6,Xt.COMPLETE="complete",Zt.EventType=ee,ee.OPEN="a",ee.CLOSE="b",ee.ERROR="c",ee.MESSAGE="d",yt.prototype.listen=yt.prototype.N,hn.prototype.listenOnce=hn.prototype.O,hn.prototype.getLastError=hn.prototype.Oa,hn.prototype.getLastErrorCode=hn.prototype.Ea,hn.prototype.getStatus=hn.prototype.aa,hn.prototype.getResponseJson=hn.prototype.Sa,hn.prototype.getResponseText=hn.prototype.fa,hn.prototype.send=hn.prototype.da,hn.prototype.setWithCredentials=hn.prototype.Ka;var Qn=r.createWebChannelTransport=function(){return new zn},Xn=r.getStatEventTarget=function(){return Bt()},Jn=r.ErrorCode=Qt,Yn=r.EventType=Xt,Zn=r.Event=jt,ti=r.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ei=r.FetchXmlHttpFactory=nn,ni=r.WebChannel=Zt,ii=r.XhrIo=hn}).call(this,n("c8ba"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return l}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function h(t){i.forEach(e=>{e.setLogLevel(t)})}function l(t,e){for(const n of i){let i=null;e&&e.level&&(i=r[e.level]),n.userLogHandler=null===t?null:(e,n,...r)=>{const o=r.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!=i?i:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:r,type:e.name})}}}}}]);