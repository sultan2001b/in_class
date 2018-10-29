# $rebots_name = [AWE778,QWG847,NGU384,KXU129,QXF846,IUY846,UDP945,XBX453,WSC384,GRI989]
require "pry"
("A".."Z").to_a.sample(2).join()

class Robot
  attr_accessor :name, :boot_time, :creation_time

  def initialize
    @name = ("A".."Z").to_a.sample(2).join() + (1..9).to_a.sample(3).join()
    @boot_time = Time.now
  end

  def reset
    @name = ("A".."Z").to_a.sample(2).join() + (1..9).to_a.sample(3).join()
    @boot_time = Time.now
  end

  def timers

  end
end

binding.pry
