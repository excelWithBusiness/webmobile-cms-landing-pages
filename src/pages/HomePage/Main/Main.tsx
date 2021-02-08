import React, {memo} from 'react';
import {TopTeaser} from '@excelwithbusiness/webmobile-sc-components';
import {Illustration01} from '@excelwithbusiness/webmobile-svg-library';
// @ts-ignore
import {useRenderMeasure} from '@/hooks';
// @ts-ignore
import {prepareHeroContentProps} from '@/app/dashboard/helpers/prepareHeroContent';

const PAGE_AREA = 'TopTeaser';

/**
 * This will be the TopTeaser for only a few select pages
 */
export const Main = memo(({slices}: { slices: any[] }) => {
    useRenderMeasure(PAGE_AREA);
    return (
        <React.Fragment>
            {slices?.map((slice: any, index: number) => {
                const keyProp = `${slice?.type}_${index}`;
                switch (slice?.type) {
                    case 'HeroBanner':
                        const heroProps = slice.pageComponents ? prepareHeroContentProps(slice.pageComponents) : null;
                        return heroProps && (
                            <TopTeaser
                                link={null}
                                color={!heroProps?.heroImages && 'primary'}
                                heroImages={heroProps?.heroImages}
                                images={heroProps?.images}
                                height={{mobile: 250, tablet: 300, desktop: 400}}
                                content={{...heroProps}}
                                svg={
                                    !heroProps?.images &&
                                    !heroProps?.heroImages && <Illustration01 height="350px" />
                                }
                            />
                        );
                    default:
                        return null;
                }
            })}
        </React.Fragment>
    );
});
