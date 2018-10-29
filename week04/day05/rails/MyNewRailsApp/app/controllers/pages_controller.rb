class PagesController < ApplicationController
  def home
    # this is what actually runs: it is optional
    # render("pages/home")
    # render({plain: "Hello World"})
  end

  def contact
    render("pages/contact")
  end

  def about
    render("pages/about")
  end

  def color
    @color = params[:color]
    # render("pages/about")
  end
end
