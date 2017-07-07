OPEN_GUI = false

HOSTNAME = "sandbox"
MEMORY = 2048

Vagrant.configure(2) do |config|

  config.vm.box = "boxcutter/ubuntu1604"
  config.vm.network "private_network", type: "dhcp"

  config.vm.hostname = HOSTNAME

  config.vm.provider "virtualbox" do |vb|
    vb.gui = OPEN_GUI
    vb.name = HOSTNAME
    vb.memory = MEMORY
  end

end
