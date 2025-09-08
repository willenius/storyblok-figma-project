import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/sb/Page';
import Teaser from '@/components/sb/Teaser';
import Feature from '@/components/sb/Feature';
import Grid from '@/components/sb/Grid';
import DoesNotExist from '@/components/sb/DoesNotExist';
import Hero from '@/components/sb/Hero';
import GridProducts from '@/components/sb/GridProducts';
import SubHero from '@/components/sb/SubHero';
import Products_Hero from '@/components/sb/Products_Hero';

export const components = {
    // Add your components here
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    hero: Hero,
    subHero: SubHero,
    gridProducts: GridProducts,
    products_hero: Products_Hero,
    doesNotExist: DoesNotExist
  };
  /**
   * Get the Storyblok API exports a StoryblokApi object to be used in the application
   * @returns {StoryblokApi}
   */
  export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
	use: [apiPlugin],
	apiOptions: {
		region: 'eu',
	},
    components
});