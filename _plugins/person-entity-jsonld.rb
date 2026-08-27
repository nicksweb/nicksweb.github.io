# frozen_string_literal: true

require "jekyll-seo-tag"
require "jekyll-seo-tag/json_ld_drop"

# Extend jekyll-seo-tag's generated JSON-LD without replacing the theme's SEO
# output. Every Person author points to the same stable entity identifier, and
# the home-page WebSite advertises legitimate variations of the site's name.
module NickOSullivanPersonEntity
  def author
    value = super
    return value unless value && value["@type"] == "Person"

    person = site_config["person"] || {}
    value["@id"] = person["id"] if person["id"]
    value["alternateName"] = person["alternate_names"] if person["alternate_names"]
    value
  end

  def alternateName
    return unless page_drop_for_entity.type == "WebSite"

    site_config["site_alternate_names"]
  end

  private

  def page_drop_for_entity
    instance_variable_get(:@page_drop)
  end

  def site_config
    page_drop_for_entity.send(:site)
  end
end

unless Jekyll::SeoTag::JSONLDDrop.ancestors.include?(NickOSullivanPersonEntity)
  Jekyll::SeoTag::JSONLDDrop.prepend(NickOSullivanPersonEntity)
end
