from rdkit import Chem
from rdkit.Chem import Draw

# Example SMILES string
smiles = 'C(CN(CC(=O)O)CC(=O)O)N(CC(=O)O)CC(=O)O'

# Convert SMILES to molecular structure
mol = Chem.MolFromSmiles(smiles)

# Check if the molecule was correctly generated
if mol is not None:
    # Prepare the drawing
    drawer = Draw.rdMolDraw2D.MolDraw2DSVG(400, 400)  # Width and height of the image
    Draw.rdMolDraw2D.PrepareAndDrawMolecule(drawer, mol)
    drawer.FinishDrawing()

    # Get SVG
    svg = drawer.GetDrawingText().replace('svg:','')

    # Print the SVG string
    print("SVG Representation:\n", svg)
else:
    print("Invalid SMILES string")