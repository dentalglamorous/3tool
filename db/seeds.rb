# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating wheel deflections ....."
WheelDeflection.create([
    { name: 'Wheel1', description: 'wheel deflection ...',
      tire_width: 4.0, tire_width_unit: 'cm',
      compression_modulus: 3.0, compression_modulus_unit: 'cm',
      load_on_wheel: 2.5, load_on_wheel_unit: 'cm',
      outside_radius: 4.5, outside_radius_unit: 'cm',
      tread_thicknes: 5.0, tread_thickness_unit: 'mm'
    }
])
puts "Done!"