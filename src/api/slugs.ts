import { supabase } from '../lib/supabase';

export async function resolveSubtopicSlug(slug: string) {
  try {
    // Decode URI component and normalize the input slug
    const decodedSlug = decodeURIComponent(slug);
    const normalizedSlug = decodedSlug
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-') // Replace any non-alphanumeric chars with hyphens
      .replace(/-+/g, '-')         // Replace multiple consecutive hyphens with a single hyphen
      .replace(/^-|-$/g, '');      // Remove leading and trailing hyphens
    
    console.log('Resolving slug:', { original: slug, decoded: decodedSlug, normalized: normalizedSlug });

    // Try direct match on canonical slug
    let { data: subtopic, error } = await supabase
      .from('subtopics')
      .select('slug')
      .eq('slug', normalizedSlug)
      .single();

    if (!error && subtopic) {
      console.log('Found direct match:', subtopic);
      return subtopic.slug;
    }

    // Try display_slug
    ({ data: subtopic, error } = await supabase
      .from('subtopics')
      .select('slug')
      .eq('display_slug', normalizedSlug)
      .single());

    if (!error && subtopic) {
      console.log('Found via display_slug:', subtopic);
      return subtopic.slug;
    }

    // Try alternative_slugs
    ({ data: subtopic, error } = await supabase
      .from('subtopics')
      .select('slug')
      .contains('alternative_slugs', [normalizedSlug])
      .single());

    if (!error && subtopic) {
      console.log('Found via alternative_slugs:', subtopic);
      return subtopic.slug;
    }

    console.log('No match found, returning normalized slug');
    return normalizedSlug;
  } catch (error) {
    console.error('Error resolving slug:', error);
    return normalizedSlug;
  }
}