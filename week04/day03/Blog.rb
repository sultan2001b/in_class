class User
    def initialize
        
    end
    def every_one_can_do_this
puts "Everyone!"
    end
end

u=User.new
u.every_one_can_do_this

class Admin<User
    def initialize
        
    end
    def only_admins
puts "This is just for Admins"
    end
end

class Author < User
    def initialize
        
    end
    def only_author
puts "only authors"
    end
end

a = Admin.new
a.only_admins
a.every_one_can_do_this

au = Author.new
au.only_author