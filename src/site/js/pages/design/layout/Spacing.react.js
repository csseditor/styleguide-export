import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { spacingCode } from '~/components/CodeSnippets.js';

export default function Spacing() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Uniform spacing"} />

                <SectionDescription>
                    Spacing can be applied using either margin or padding. Both{' '}
                    <InlineCode>margin</InlineCode> and <InlineCode>padding</InlineCode>{' '}
                    share the same predefined scale. There are 6 available spacing
                    sizes; <InlineCode>.margin-xxs</InlineCode>, <InlineCode>.margin-xs</InlineCode>,{' '}
                    <InlineCode>.margin-s</InlineCode>, <InlineCode>.margin-m</InlineCode>,{' '}
                    <InlineCode>.margin-l</InlineCode> or <InlineCode>.margin-xl</InlineCode>.{' '}
                    All classes have responsive options available.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--1 breakPointS-grid--2 breakPointL-grid--3">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointS-borderRightWidth-1">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m padding-xxs">
                                    <div className="width-100 height-100 bg-marvel--l"></div>
                                    <div
                                        className="posPinBL borderWidth-0 borderBottomWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginBottom-xxs"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderTopWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginTop-xxs"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderLeftWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginLeft-xxs"
                                        style={{ width: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTR borderWidth-0 borderRightWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginRight-xxs"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointL-borderRightWidth-1">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m padding-xs">
                                    <div className="width-100 height-100 bg-marvel--l"></div>
                                    <div
                                        className="posPinBL borderWidth-0 borderBottomWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginBottom-xs"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderTopWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginTop-xs"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderLeftWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginLeft-xs"
                                        style={{ width: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTR borderWidth-0 borderRightWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginRight-xs"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointS-borderRightWidth-1 breakPointL-borderRightWidth-0">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m padding-s">
                                    <div className="width-100 height-100 bg-marvel--l"></div>
                                    <div
                                        className="posPinBL borderWidth-0 borderBottomWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginBottom-s"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderTopWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginTop-s"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderLeftWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginLeft-s"
                                        style={{ width: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTR borderWidth-0 borderRightWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginRight-s"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m padding-m">
                                    <div className="width-100 height-100 bg-marvel--l"></div>
                                    <div
                                        className="posPinBL borderWidth-0 borderBottomWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginBottom-m"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderTopWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginTop-m"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderLeftWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginLeft-m"
                                        style={{ width: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTR borderWidth-0 borderRightWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginRight-m"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointS-borderBottomWidth-0 breakPointS-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m padding-l">
                                    <div className="width-100 height-100 bg-marvel--l"></div>
                                    <div
                                        className="posPinBL borderWidth-0 borderBottomWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginBottom-l"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderTopWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginTop-l"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderLeftWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginLeft-l"
                                        style={{ width: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTR borderWidth-0 borderRightWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginRight-l"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m padding-xl">
                                    <div className="width-100 height-100 bg-marvel--l"></div>
                                    <div
                                        className="posPinBL borderWidth-0 borderBottomWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginBottom-xl"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderTopWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginTop-xl"
                                        style={{ height: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTL borderWidth-0 borderLeftWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginLeft-xl"
                                        style={{ width: '1px' }}>
                                    </div>
                                    <div
                                        className="posPinTR borderWidth-0 borderRightWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginRight-xl"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={spacingCode} />
        </section>
    );
}
