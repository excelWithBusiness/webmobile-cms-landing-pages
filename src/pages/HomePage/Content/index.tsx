import React from 'react';
import {Section} from '@excelwithbusiness/webmobile-sc-components';
// @ts-ignore-next-line
import {CmsCallToActionPanel} from "../../../components/CallToActionPanel";
import {StaticPlaylist} from "../../../components/StaticPlaylist";

export const Content = ({slices}: { slices: any[] }) => {
  if (!Array.isArray(slices) || !slices.length) {
    return null;
  }

  return (
    <Section>
      {slices?.map((slice: any, index: number) => {
        const keyProp = `${slice?.type}_${index}`;
        switch (slice?.type) {
          case 'CallToAction':
            console.log('matched CallToAction')
            return <CmsCallToActionPanel content={slice.pageComponents}/>
          case 'PlaylistSection':
            console.log('matched PlaylistSection')
            return <StaticPlaylist key={keyProp} name={slice.name}
                                   title={slice.pageComponents.sectionName}
                                   type={slice.pageComponents.sectionType}
                                   id={slice.id}
                                   loading={!slice.pageComponents.staticPlaylists[0]}
                                   tooltip="Not found where this us yet!!"
                                   desktop={slice.size}
                                   assets={[...slice.pageComponents.staticPlaylists[0].staticAssetTiles]}
            />
          default:
            return null;
        }
      })}
    </Section>
  )
};
