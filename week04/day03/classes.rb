require "pry"

class Per

    def initialize

    end

    def first_name=(name)
@first_name = name
    end

    def first_name
return @first_name
    end

end

p1 = Per.new

class User
attr_accessor :first_name, :last_name, :email

def initialize
puts "user is initialize"
end
end

class Book#(titleP,authorP)

    attr_accessor :title, :author

    def initialize(title,author)
 @title =title
 @author=author
    end
    def read
puts "you jusr read #{@title} writen by #{@author}" 
    end

end

geb = Book.new("how to be a developer","sultan alsamaani")
# geb.title = "how to be a developer"
# geb.author = "sultan alsamaani"
geb.read


# #Creating a blueprint
# class Person
   
#     #adding instance method
#     def speak(message) 
# puts message
#     end

#     def eat
# puts "i am eating lunch"
#     end

#     def change_name(new_name)
# @first_name = new_name
#     end

# end


# #creating an Instance
# per = Person.new
# # per.speak
# class Animal

# end

# animal =Animal.new

# class Chair

# end

# chair = Chair.new

# class BlogPost
#  def initialize
# puts "some thing"
#     end
# def edit

# end

# def delete
# puts "deleted"
# end

# end

# # b=BlogPost.new
# # BlogPost.instance_

# b=BlogPost.new


binding.pry