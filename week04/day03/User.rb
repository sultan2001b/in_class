class User
    attr_accessor :user_name, :first_name, :last_name, :email
    def initialize(user_name,first_name,last_name, email)
        @user_name = user_name
        @first_name =first_name
        @last_name = last_name
        @email = email
        puts "A new user signed up #{@user_name+@first_name}"
    end

    def send_email
puts "sending an email to #{email}"
    end
end

moath = User.new("moath" , " a" ," b","a@a.a")
p moath.send_email
# puts moath

