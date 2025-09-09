import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/sb/Page';
import Teaser from '@/components/sb/Teaser';
import Grid from '@/components/sb/Grid';
import DoesNotExist from '@/components/sb/DoesNotExist';
import Hero from '@/components/sb/Hero';
import GridProducts from '@/components/sb/GridProducts';
import SubHero from '@/components/sb/SubHero';
import Products_Hero from '@/components/sb/Products_Hero';
import About_Hero from '@/components/sb/About_Hero'
import Header from '@/components/sb/Header';
import Footer from '@/components/sb/Footer';

export const components = {
    // Add your components here
    page: Page,
    grid: Grid,
    teaser: Teaser,
    hero: Hero,
    subHero: SubHero,
    gridProducts: GridProducts,
    products_hero: Products_Hero,
    about_hero: About_Hero,
    header: Header,
    footer: Footer,
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