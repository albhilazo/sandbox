OPEN_GUI = false

USERNAME = "devel"
HOSTNAME = "sandbox"
MEMORY = 2048

ANSIBLE_VERBOSE = true
ANSIBLE_VERSION = "2.3.1.0"

VAGRANT_COMMAND = ARGV[0]

Vagrant.configure(2) do |config|

  if VAGRANT_COMMAND == "ssh"
    config.ssh.username = USERNAME
  end

  config.vm.box = "boxcutter/ubuntu1604"
  config.vm.network "private_network", type: "dhcp"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.synced_folder "./src",  "/home/vagrant/src", owner: 1001, group: 1001

  config.vm.hostname = HOSTNAME

  config.vm.provider "virtualbox" do |vb|
    vb.gui = OPEN_GUI
    vb.name = HOSTNAME
    vb.memory = MEMORY
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.install_mode = "pip"
    ansible.version = ANSIBLE_VERSION
    ansible.inventory_path = "ansible/hosts"
    ansible.playbook = "ansible/provision.yml"
    ansible.limit = "all"
    ansible.sudo = true
    ansible.verbose = ANSIBLE_VERBOSE
  end

  config.vm.provision "shell" do |shell|
    shell.name = "create src symlink in #{USERNAME} user home to synced folder"
    shell.inline = "ln -s --force --no-target-directory /home/vagrant/src /home/#{USERNAME}/src"
  end

end
