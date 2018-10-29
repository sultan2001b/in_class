class Brand
  attr_accessor :name, :products, :email

  def initialize(name, email)
    @name = name
    @email = email
    @products = []
    puts "The store now has a new brand"
  end

  def show_company_details
    p "Name: #{@name}. Email: #{@email}."
  end

  def add_product(name)
    @products.push(name)
    # p name
  end

  def list_products
@products.each {|p| puts p}
  end

end

mishaer = Brand.new("Mishaer", "@ga.co")
mishaer.show_company_details()
mishaer.add_product("Thobe")
mishaer.add_product("bisht")
p mishaer
mishaer.list_products
